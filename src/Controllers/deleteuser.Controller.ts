import { Request, Response } from "express";
import { deleteUserService } from "../Services/deleteUser.Service";

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const  data= await deleteUserService(id);
  return res.status(204).json(data);
};
