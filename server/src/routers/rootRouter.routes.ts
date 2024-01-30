import { Express } from "express";
import { todolistRouter } from "./todolist.routes";


export const rootRouter = (app: Express) => {
     todolistRouter(app)
};

