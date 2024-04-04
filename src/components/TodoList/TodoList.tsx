import styled from "@emotion/styled";
import { styleVars } from "globalStyles";
import useTodoList from "hooks/useTodoList";
import { useState } from "react";
import { TaskList } from "types";
import TodoListItem from "./TodoItem/TodoItem";
import TodoFilter from "../TodoFilter/TodoFilter";

const TodoListWrapper = styled.div({
  width: "100%",
  paddingTop: "1em",
  borderTop: `1px solid ${styleVars.lightGray}`,
});

const TodoListStyle = styled.ul({
  width: "100%",
  display: "flex",
  gap: "1em",
  flexDirection: "column",
});

const NoTask = styled.i({
  width: "100%",
  textAlign: "center",
  color: styleVars.gray,
  display: "block",
});

export default function TodoList() {
  const { todoList } = useTodoList();
  const [tasks, setTasks] = useState<TaskList>(todoList);
  return (
    <TodoListWrapper>
      <h2>Vos tâches</h2>
      <TodoFilter onFilterChange={setTasks} />
      <TodoListStyle data-cy="task-list">
        {tasks.map((todo) => (
          <TodoListItem key={todo.id} task={todo} />
        ))}
      </TodoListStyle>
      {tasks.length === 0 && <NoTask>Aucune tâche pour le moment</NoTask>}
    </TodoListWrapper>
  );
}
