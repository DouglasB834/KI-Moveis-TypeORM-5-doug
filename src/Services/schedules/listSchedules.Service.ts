import AppDataSource from "../../data-source"
import { Properties } from "../../entities/createProperties.entity"
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties"
import { appErros } from "../../error/appErros"

export const listSchedulesService =async (idProperty:String|any)=> {

    const schudelesResp =  AppDataSource.getRepository(SchedulesUserProperties)
    const propertiesResp =  AppDataSource.getRepository(Properties)

   const findProper = await propertiesResp
    .createQueryBuilder()
    .select("p")
    .from("properties", "p")
    .where("p.id = :id", { id: idProperty })
    .getOne();


  if (!findProper) throw new appErros("property not found1", 404);
    
    // const properResponse = await propertiesResp.findOne({
    //     where: { id:idProperty},
    //     relations:{schedules: true}
    // })

    const selectProperty = await propertiesResp.createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "schedules")
    .innerJoinAndSelect("properties.address", "adress")
    .innerJoinAndSelect("schedules.user", "userId")
    .innerJoinAndSelect("properties.category", "categoryId")
    .getOne();

    
// SELECT
// p.id , p.sold, p.value ,p."size" , p."createdAt" , p."updatedAt", sup.id , sup."date",
// sup."hour", u.*, a.*, c.*
// FROM Properties p
// JOIN "schedulesUserProperties" sup ON  sup."propertyId"  = p.id
// JOIN addresses a ON a.id = p."addressId" 
// JOIN users u ON u.id = sup."userId" 
// JOIN  categories c ON c.id = p."categoryId" 
// WHERE p.id = '031a589b-2133-4d62-aeac-39fd0cd0f516'
   
    return selectProperty

    
}