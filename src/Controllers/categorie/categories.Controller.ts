import { Request, Response } from "express";
import { createCategoriesService, listCategoriesPropertiesService, listCategoriesService } from "../../Services/categorie/categories.Services";

export const createCategoriesController = async ( req: Request, res: Response) => {
    const {name } = req.body
  const data = await createCategoriesService(name);

  return res.status(201).json(data);
};

export const listCategoriesController = async ( req: Request, res: Response) => {
  const data = await listCategoriesService();
  return res.status(200).json(data);
};

export const listCategoriesPropertiesController = async ( req: Request, res: Response) => {
  const { id} =req.params
  const data = await listCategoriesPropertiesService(id);
  return res.status(200).json(data);
};
