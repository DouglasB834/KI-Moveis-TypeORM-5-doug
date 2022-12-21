
import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";

export const verificarIsactive = async ( req: Request, res: Response, next: NextFunction) => {
    const {email} = req.body
    const userRes = AppDataSource.getRepository(User)
    const user = await userRes.findOneBy({email:email})
    if(!user.isActive) return res.status(400).json({message:"Usuario esta inativo!"})

    return next()
}
