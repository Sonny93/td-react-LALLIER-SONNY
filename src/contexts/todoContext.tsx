import { ReactNode, createContext, useEffect, useState } from "react";
import { PartialTask, Task, TaskList } from "types";
import { isJsonString } from "utils/isJsonString";

type TodoContextType = {
  todoList: TaskList;
  addTask: (task: PartialTask) => void;
  toggleStatus: (task: Task) => void;
};

const iTodoContextState: TodoContextType = {
  todoList: [],
  addTask: () => {},
  toggleStatus: () => {},
};

export const TodoContext = createContext<TodoContextType>(iTodoContextState);

const LS_TODO_LIST_KEY = "todos";
const TODO_LIST_LS = localStorage.getItem(LS_TODO_LIST_KEY);

if (!isJsonString(TODO_LIST_LS)) {
  console.warn("Invalid json detected, clean it up");
  localStorage.removeItem(LS_TODO_LIST_KEY);
}

const TODO_LIST = isJsonString(TODO_LIST_LS) ? JSON.parse(TODO_LIST_LS!) : [];

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todoList, setTodoList] = useState<TaskList>(TODO_LIST);

  const createTaskHelper = (partialTask: PartialTask) => ({
    id: Date.now(),
    done: false,
    ...partialTask,
  });

  const addTask = (partialTask: PartialTask) =>
    setTodoList((_todoList) => [createTaskHelper(partialTask), ..._todoList]);

  const toggleStatus = (task: Task) =>
    setTodoList((_todoList) => {
      const todoListCopy = [..._todoList];

      const todoItemIndex = todoListCopy.findIndex((t) => t.id === task.id);
      const todoItem = todoListCopy[todoItemIndex];

      if (todoItemIndex !== -1) {
        todoListCopy[todoItemIndex] = {
          ...todoItem,
          done: !todoItem.done,
        };
      }

      return todoListCopy;
    });

  useEffect(
    () => localStorage.setItem(LS_TODO_LIST_KEY, JSON.stringify(todoList)),
    [todoList]
  );

  return (
    <TodoContext.Provider value={{ todoList, addTask, toggleStatus }}>
      {children}
    </TodoContext.Provider>
  );
}
