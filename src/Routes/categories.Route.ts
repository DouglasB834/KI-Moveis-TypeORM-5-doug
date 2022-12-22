import { Router } from "express";
import { createCategoriesController, listCategoriesController, listCategoriesPropertiesController } from "../Controllers/categorie/categories.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";


export const RouteCategorie = Router()


RouteCategorie.post("",authorTokenMiddleware, isAdmUserMiddleware, createCategoriesController )
RouteCategorie.get("", listCategoriesController )
RouteCategorie.get("/:id/properties", listCategoriesPropertiesController )