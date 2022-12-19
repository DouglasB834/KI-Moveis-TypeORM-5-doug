import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";

export const isAdmUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user.id;
  const userRes = AppDataSource.getRepository(User);

  const user = await userRes.findOneBy({ id: id });

  if (!user) {
    throw new appErros("user not found", 404);
  }

  if (!user.isAdm) {
    throw new appErros("missing admin permissions", 403);
  }
  return next();
};
