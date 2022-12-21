import { compare } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { IUserLogin } from "../interfaces/users";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { appErros } from "../error/appErros";

export const loginUserService = async ({email,password}: IUserLogin): Promise<String> => {
  const userRes = AppDataSource.getRepository(User);
  const user = await userRes.findOneBy({ email: email });

  if (!user) throw new appErros("Email or PassWord Incorrect", 401);

  if (user.isActive == false) {
    throw new appErros("Usuario inativo ", 400);
  }
  
  const passwordalid = await compare(password, user.password);

  if (!passwordalid) throw new appErros("Email or PassWord Incorrect", 403);

  const token = jwt.sign({ isAdm: user.isAdm }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.id,
  });
  return token;
};
