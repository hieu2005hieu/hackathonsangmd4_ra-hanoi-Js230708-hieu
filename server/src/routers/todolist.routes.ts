import { Express } from 'express';
import { addTodoistMsql2, deleteTodolist, gettodolist, updateTodolist } from '../controller/todolist.controller';
export const todolistRouter = (app: Express) => {
    app.get("/api/v1/todolist", gettodolist) 
    app.post("/api/v1/todolistadd", addTodoistMsql2)
    app.delete("/api/v1/todolistdelete/:id", deleteTodolist)
    app.put("/api/v1/todolistupdate/:id",updateTodolist)
}