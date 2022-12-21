import { Request, Response } from "express";
import { schedulesCreateService } from "../../Services/schedules/schedules.Service";

export const schedulesCreateController = async( req: Request, res:Response) =>{
    const {id} = req.user
    const data = await schedulesCreateService(req.body, id)
    return res.status(201).json(data)
}