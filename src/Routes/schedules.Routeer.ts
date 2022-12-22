import { Router } from "express";
import { listSchedulesController, schedulesCreateController } from "../Controllers/schedules/schedules.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";


export const schedulesRoutes = Router();

schedulesRoutes.post("", authorTokenMiddleware, schedulesCreateController);
schedulesRoutes.get("/properties/:id", authorTokenMiddleware, isAdmUserMiddleware, listSchedulesController);