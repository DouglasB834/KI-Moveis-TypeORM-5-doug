import { Router } from "express";
import { createAdressesController } from "../Controllers/properties.Controllres/createAdresses.Controller";
import { createPropertiesController, listPropertiesController } from "../Controllers/properties.Controllres/Properties.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import {isAdmUserMiddleware} from "../Middlware/isAdmUser.Middleware"


export const propRount = Router();

propRount.post("", authorTokenMiddleware, isAdmUserMiddleware , createPropertiesController )
propRount.get("", listPropertiesController )