import "express-async-errors";
import "reflect-metadata";
import { handleErro } from "./error/appErros";
import express from "express";
import { RouteMain } from "./Routes/user.Routes";
import { loginRoutes } from "./Routes/login.Route";

const app = express();
app.use(express.json());
app.use("/users", RouteMain);
app.use("/login", loginRoutes);
app.use(handleErro);

export default app;
