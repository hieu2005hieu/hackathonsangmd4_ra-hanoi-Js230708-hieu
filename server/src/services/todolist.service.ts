import database from "../config/database.config";

export const getAllTodolistMySql = async () => {
  try {
    const [todolist] = await database.execute("SELECT * FROM todolist");
    return todolist;
  } catch (error) {
    console.log(error);
  }
};
export const addTodolistMySql = async (
  id: number,
  name: string,
  status: boolean
) => {
    try {
      
      
    const [product] = await database.execute(
      "INSERT INTO todolist (id,username,status) values (?,?,?)",
      [id, name, status]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodolistMySql = async (id: number) => {
  try {
    const [todolist] = await database.execute("DELETE FROM todolist WHERE id=?", [id]);
    return todolist;
  } catch (error) {
    console.log(error);
  }
};
export const updateTodulistMySql = async (
  id: number,
  status: boolean,

) => {
  try {
    const [product] = await database.execute(
      "UPDATE todolist SET id=?, status=? WHERE id=?",
      [ status,id]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
};