import { Request, Response } from "express";
import { loginUserService } from "../Services/loginUser.Service";

export const loginUserController = async (req: Request, res: Response) => {
  const token = await loginUserService(req.body);

  return res.status(200).json({ token });
};
