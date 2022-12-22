import { Router } from "express";
import { listSchedulesController, schedulesCreateController } from "../Controllers/schedules/schedules.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";
import { ValidatedMiddleware } from "../Middlware/validate.Middleware copy";
import { schedulesSchema } from "../Serializer/schedullesSchema";

export const schedulesRoutes = Router();

schedulesRoutes.post("", authorTokenMiddleware,ValidatedMiddleware(schedulesSchema), schedulesCreateController);
schedulesRoutes.get("/properties/:id", authorTokenMiddleware, isAdmUserMiddleware, listSchedulesController);