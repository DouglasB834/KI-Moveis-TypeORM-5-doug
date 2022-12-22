
import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";

export const activeMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const userRes = AppDataSource.getRepository(User)
    const user = await userRes.findOneBy({id:id})
    
    if(!user) return res.status(404).json({message:"Usuario esta inativo!"})

    if(!user.isActive) return res.status(400).json({message:"Usuario esta inativo!"})

    return next()
}
