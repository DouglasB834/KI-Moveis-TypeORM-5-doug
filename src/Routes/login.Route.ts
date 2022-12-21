import { Router } from "express";
import { loginUserController } from "../Controllers/loginUser.Controller";

export const loginRoutes = Router();

loginRoutes.post("", loginUserController);