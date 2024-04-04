import styled from "@emotion/styled";
import { styleVars } from "globalStyles";
import useTodoList from "hooks/useTodoList";
import { Task } from "types";

const TodoListItemDoneBtnStyle = styled.button<{ disabledStyle: boolean }>(
  ({ disabledStyle }) => ({
    cursor: "pointer",
    height: "28px",
    width: "28px",
    color: styleVars.white,
    backgroundColor: styleVars.blue,
    padding: ".5em",
    borderRadius: "50%",
    border: 0,
    display: "flex",
    gap: "1em",
    alignItems: "center",
    justifyContent: "center",
    transition: ".15s",
    opacity: disabledStyle ? 0.5 : 1,
  })
);

export default function TodoListItemDoneBtn({ task }: { task: Task }) {
  const { toggleStatus } = useTodoList();
  const onClick = () => toggleStatus(task);
  return (
    <TodoListItemDoneBtnStyle onClick={onClick} disabledStyle={task.done}>
      ✔
    </TodoListItemDoneBtnStyle>
  );
}
