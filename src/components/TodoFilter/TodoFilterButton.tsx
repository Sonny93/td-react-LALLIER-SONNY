import styled from "@emotion/styled";
import { styleVars } from "globalStyles";

const TodoFilterButton = styled.button<{ selected: boolean }>(
  ({ selected = false }) => ({
    cursor: "pointer",
    height: "fit-content",
    minHeight: "30px",
    width: "125px",
    color: styleVars.white,
    backgroundColor: styleVars.blue,
    borderRadius: styleVars.borderRadius,
    border: `1px solid ${styleVars.blue}`,
    padding: ".5em .75em",
    transition: "0.15s",
    opacity: selected ? 1 : 0.5,
  })
);

export default TodoFilterButton;
