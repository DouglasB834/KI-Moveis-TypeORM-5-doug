import { Request, Response } from "express";
import { createPropertiesService, listePropertiesService } from "../../Services/propeerties/properties.Services";


export const createPropertiesController = async(req:Request, res:Response)=>{
    const data = await  createPropertiesService(req.body)
    return res.status(201).json(data)

}
export const listPropertiesController = async(req:Request, res:Response)=>{
    const data = await  listePropertiesService()
    return res.status(200).json(data)

}