import { Request, Response } from "express";
import { createAdressesService } from "../../Services/propeerties/createAdresses.Service";


export const createAdressesController = async (req:Request, res: Response)=>{
    const data = await createAdressesService(req.body)
    return  res.status(201).json(data)
}