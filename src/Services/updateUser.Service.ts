import { hash } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";
import { IUserResponse, IUserUpdate } from "../interfaces/users";
import { resUpdateSchema } from "../Serializer/usersSchemas";

export const updateUserService = async (data :IUserUpdate, userId:string):Promise<IUserResponse> =>{
    
    const userRes = AppDataSource.getRepository(User)

    const user = await userRes.findOneBy({id: userId})

   if(!user) {
        throw new appErros("user not found",404)  
    }
    
    const update = userRes.create({
        ...user,
        ...data
    })
    
    await userRes.save(update)

    const resUSer = await resUpdateSchema.validate(update,{
        stripUnknown:true
    })

    return resUSer
}