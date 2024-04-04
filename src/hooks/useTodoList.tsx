import { TodoContext } from "contexts/todoContext";
import { useContext } from "react";

const useTodoList = () => useContext(TodoContext);
export default useTodoList;
