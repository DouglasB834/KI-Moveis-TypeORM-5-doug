import AppDataSource from "../../data-source"
import { Categories } from "../../entities/createCategories.entity"
import { Properties } from "../../entities/createProperties.entity"
import { SchedulesUserProperties } from "../../entities/schedulesUserProperties"
import { appErros } from "../../error/appErros"
import { ICategoryRequest } from "../../interfaces/categories"

export const createCategoriesService= async( name: string ): Promise<Categories> =>{
    const categoriesRep = AppDataSource.getRepository(Categories)
    
    const categorie = await categoriesRep.findOneBy({name: name })
  
    if(categorie) throw new appErros("category  already exists ", 409)

    const addCat = categoriesRep.create( {name: name} )
    await categoriesRep.save(addCat)

    return addCat

}

export const listCategoriesService= async( ): Promise<Categories[]> =>{
    const categoriesRep = AppDataSource.getRepository(Categories)
    const categorie = await categoriesRep.find()
    return categorie

}
export const listCategoriesPropertiesService= async(id:string ): Promise<Categories> =>{
    const categoriesRep = AppDataSource.getRepository(Categories)
    const categorie = await categoriesRep.findOne({
    where: {id:id} ,      
     relations: {properties:true}
    })
    if(!categorie)throw new appErros ("Property not found", 404)

    return categorie

}
