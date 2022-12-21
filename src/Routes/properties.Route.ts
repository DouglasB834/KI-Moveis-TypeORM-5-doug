import { Router } from "express";
import { createAdressesController } from "../Controllers/properties/createAdresses.Controller";
import {
  createPropertiesController,
  listPropertiesController,
} from "../Controllers/properties/Properties.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";

export const propRount = Router();

propRount.post(
  "",
  authorTokenMiddleware,
  isAdmUserMiddleware,
  createPropertiesController
);
propRount.get("", listPropertiesController);
