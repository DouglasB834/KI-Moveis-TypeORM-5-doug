import AppDataSource from "../../data-source";
import { Properties } from "../../entities/createProperties.entity";
import { User } from "../../entities/createuser.entity";
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties";
import { appErros } from "../../error/appErros";
import { IScheduleRequest, IScheduleResponse } from "../../interfaces/schedules";


export const schedulesCreateService = async(data:IScheduleRequest, id:string)=>{
    
    const schedulesRep =  AppDataSource.getRepository(SchedulesUserProperties)
    const propertiesRep =  AppDataSource.getRepository(Properties)
    const userRep =  AppDataSource.getRepository(User)

    
    const findUser = await userRep.findOneBy({id:id})
    if(!findUser)throw new appErros("user not found user ",404)
    
    const findProper = await propertiesRep.findOneBy({id:data.propertyId})
    if(!findProper)throw new appErros("property not found1",404)

    const findSchedules = await schedulesRep.findOne({
        where: {hour: data.hour, date:data.date},    
    })
  
    if(findSchedules)throw new appErros("Schedules not found2 ",409)
    
    const newDate = new Date(data.date).toString().split(" ")[0]
  
    if(newDate =="Sat" || newDate == "Sun" ){
        throw new appErros("user not found ",400)
    }
   
    if( data.hour > "18:00" ||  data.hour < "08:00"){
        throw new appErros("hora errada ",400)
    }
    // const hours = data.hour.

    const addSchedules = schedulesRep.create({
        ...data,
        property:findProper,
        user:findUser 
    })
    await schedulesRep.save(addSchedules)

    // const insertSchedules = await schedulesRep.createQueryBuilder()
    // .insert()
    // .values([
    //     { date: date, hour: hour, property: findProper}
    // ])
    // .returning("*")
    // .execute();
    // console.log(insertSchedules)
    return {message: "Schedule created"}

}