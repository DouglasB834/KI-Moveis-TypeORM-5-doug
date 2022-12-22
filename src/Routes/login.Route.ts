import { Router } from "express";
import { loginUserController } from "../Controllers/crudUser/loginUser.Controller";


export const loginRoutes = Router();

loginRoutes.post("", loginUserController);