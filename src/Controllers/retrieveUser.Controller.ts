import { Request, Response } from "express";
import { retrieveUserService } from "../Services/retrieveUser.Service";

export const retrieveUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.params.id);
  return res.status(200).json(user);
};
