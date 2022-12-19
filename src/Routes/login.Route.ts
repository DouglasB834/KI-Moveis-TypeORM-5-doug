import { Router } from "express";
import { loginUserController } from "../Controllers/loginUser.Controller";
import { verificarIsactive } from "../Middlware/verificarIsActive.Middleware";

export const loginRoutes = Router();

loginRoutes.post("", loginUserController);