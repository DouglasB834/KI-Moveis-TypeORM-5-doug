import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";

export const isAdmUpdaterMiddleware = async ( req: Request, res: Response, next: NextFunction) => { 
    const data = Object.keys(req.body)
    const {isAdm } = req.user
    const userId = req.user.id
    const id = req.params.id

    if(data.includes("isAdm") || data.includes("isActive") || data.includes("id")){
        throw new appErros("missing admin permissions", 401)
    }

    if(!isAdm) throw new appErros("user not found or not  permission ",401) 

    
    return next()
}