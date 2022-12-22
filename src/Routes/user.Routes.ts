import { Router } from "express";
import { createUserController } from "../Controllers/crudUser/createUser.Controller";
import { deleteUserController } from "../Controllers/crudUser/deleteuser.Controller";
import { listUsersController } from "../Controllers/crudUser/listUsers.Controller";
import { retrieveUserController } from "../Controllers/crudUser/retrieveUser.Controller";
import { updateUserController } from "../Controllers/crudUser/updateUser.Controller";
import { activeMiddleware } from "../Middlware/active.Middleware";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUpdaterMiddleware } from "../Middlware/IsAdmUpdate.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";
import { ValidatedMiddleware } from "../Middlware/validate.Middleware copy";
import { validateUpdatedMiddleware } from "../Middlware/validateUpdate.Middleware";
import { UpdateSchema, userSchema } from "../Serializer/usersSchemas";

export const RouteMain = Router();

RouteMain.post("", ValidatedMiddleware(userSchema), createUserController);

RouteMain.get(
  "",
  authorTokenMiddleware,
  isAdmUserMiddleware,
  listUsersController
);
RouteMain.get("/:id", retrieveUserController);

RouteMain.delete(
  "/:id",
  authorTokenMiddleware,
  isAdmUserMiddleware,
  activeMiddleware,
  deleteUserController
);
RouteMain.patch(
  "/:id",
  authorTokenMiddleware,
  isAdmUpdaterMiddleware,
  validateUpdatedMiddleware(UpdateSchema),
  updateUserController
);
