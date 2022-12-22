import { Request, Response } from "express";
import { updateUserService } from "../../Services/crudUser/updateUser.Service";
export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await updateUserService(req.body, id);
  return res.status(200).json(data);
};
