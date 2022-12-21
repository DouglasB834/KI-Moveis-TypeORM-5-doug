import AppDataSource from "../../data-source"
import { Properties } from "../../entities/createProperties.entity"
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties"

export const listSchedulesService =async (idProperty:any):Promise<SchedulesUserProperties> => {

    const schudelesResp =  AppDataSource.getRepository(SchedulesUserProperties)
    // const propertiesResp =  AppDataSource.getRepository(Properties)

    const selectProperty = await schudelesResp.createQueryBuilder("schedulesUserProperties")
    .innerJoinAndSelect("schedulesUserProperties.property", "property")
    .where("property.id = :id", {id: idProperty})
    .getOne();

    return selectProperty

    
}