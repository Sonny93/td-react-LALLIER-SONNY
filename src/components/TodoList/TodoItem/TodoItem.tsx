import styled from "@emotion/styled";
import { Task } from "types";
import TodoItemDescription from "./TodoItemDescription";
import TodoListItemDoneBtn from "./TodoItemDoneBtn";
import TodoItemTitle from "./TodoItemTitle";

const TodoListItemStyle = styled.li({
  width: "100%",
  display: "flex",
  gap: "1em",
  justifyContent: "space-between",
});

const CrossedOutText = styled.div<{ done: boolean }>(({ done }) => ({
  textDecoration: done ? "line-through" : "none",
}));

const TodoListItem = ({ task }: { task: Task }) => (
  <TodoListItemStyle data-cy="task-item">
    <CrossedOutText done={task.done}>
      <TodoItemTitle>{task.title}</TodoItemTitle>
      <TodoItemDescription>{task.description}</TodoItemDescription>
    </CrossedOutText>
    <TodoListItemDoneBtn task={task} />
  </TodoListItemStyle>
);

export default TodoListItem;
