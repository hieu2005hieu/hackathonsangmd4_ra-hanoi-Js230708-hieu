import { addTodolistMySql, deleteTodolistMySql, getAllTodolistMySql, updateTodulistMySql } from "../services/todolist.service";
import { Request, Response } from "express";
export const gettodolist = async(req:Request,res:Response) =>{
          try {
               const todolist = await getAllTodolistMySql()
               res.status(200).json({
                    message:"lay thanh cong",
                    todolist
               })
          } catch (error) {
               console.log(error);
               
          }
}
export const addTodoistMsql2 = async(req:Request,res:Response) =>{
    try {
      
         const { id, name, status } = req.body
         
         
         const todolist = await addTodolistMySql(id,name,status)
         if(!todolist){
               res.status(500).json({
                    message:"co loi khi them san pham"
               })
         }else{
          res.status(201).json({
               message:"them san pham thanh cong",
               todolist
          })
         }
     } catch (error) {
          console.log(error);
          
     }
}
export const deleteTodolist = async(req:Request,res:Response) =>{
     try {
         const { id } = req.params
         console.log(id);
         
          const product = await deleteTodolistMySql(Number(id))
          res.status(200).json({
               message:"xoa thanh cong",
               product
          })
     } catch (error) {
          console.log(error);
          
     }
}
export const updateTodolist = async(req:Request,res:Response) =>{
     try {
          const {id} = req.params
         const  status  = req.body
        console.log(status);
        
         
         const newProduct = await updateTodulistMySql( Number(id),status  )
         res.status(200).json({
          message:"sua thanh cong",
          newProduct
     })
     } catch (error) {
          console.log(error);
          
     }
}