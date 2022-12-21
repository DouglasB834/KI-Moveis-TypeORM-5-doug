import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";


export const isAdmUpdaterMiddleware = async ( req: Request, res: Response, next: NextFunction) => { 
    const data = Object.keys(req.body)
    const {isAdm } = req.user
    const userId = req.user.id
    const id = req.params.id

    
    return next()
}