import styled from "@emotion/styled";
import useTodoList from "hooks/useTodoList";
import { Task } from "types";
import TodoItemDescription from "./TodoItemDescription";
import TodoListItemDoneBtn from "./TodoItemDoneBtn";
import TodoItemTitle from "./TodoItemTitle";

const TodoListItemStyle = styled.li({
  cursor: "pointer",
  width: "100%",
  display: "flex",
  gap: "1em",
  justifyContent: "space-between",
});

const CrossedOutText = styled.div<{ completed: boolean }>(({ completed }) => ({
  textDecoration: completed ? "line-through" : "none",
}));

export default function TodoListItem({ task }: { task: Task }) {
  const { toggleStatus } = useTodoList();
  const onClick = () => toggleStatus(task);

  return (
    <TodoListItemStyle
      data-cy="task-item"
      className={task.completed ? "completed" : ""}
      onClick={onClick}
    >
      <CrossedOutText completed={task.completed}>
        <TodoItemTitle>{task.text}</TodoItemTitle>
        <TodoItemDescription>{task.description}</TodoItemDescription>
      </CrossedOutText>
      <TodoListItemDoneBtn completed={task.completed} />
    </TodoListItemStyle>
  );
}
