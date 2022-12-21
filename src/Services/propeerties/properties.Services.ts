import { createAdressesController } from "../../Controllers/properties.Controllres/createAdresses.Controller";
import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/createAdresses.entity";
import { Categories } from "../../entities/createCategories.entity";
import { Properties } from "../../entities/createProperties.entity";
import { appErros } from "../../error/appErros";
import { IPropertyRequest, IPropertyResponse } from "../../interfaces/properties";
import { createAdressesService } from "./createAdresses.Service";

export const createPropertiesService = async (data:any): Promise<any> =>{
   const { address, categoryId} =data

   const properResp =  AppDataSource.getRepository(Properties)
   const categoriesResp =  AppDataSource.getRepository(Categories)
   const adressResp =  AppDataSource.getRepository(Addresses)

    const findCategory = await categoriesResp.findOneBy({id:categoryId})

    const addadress = await createAdressesService(address)
    if(addadress.zipCode ) throw new appErros("invalid categoryId", 409)
    if(!addadress.zipCode ) throw new appErros("invalid categoryId", 400)

    const idAdress = addadress.id
    const findAdress = await adressResp.findOneBy({id:idAdress })
    const salvando = properResp.create({
        ...data,
        category:findCategory,
        address:findAdress,
    })
    const addPropiedade = await properResp.save(salvando)    
 
    return addPropiedade
}