import styled from "@emotion/styled";
import { styleVars } from "globalStyles";

const FormButton = styled.button<{ disabled?: boolean }>(
  ({ disabled = false }) => ({
    cursor: disabled ? "not-allowed" : "pointer",
    height: "fit-content",
    minHeight: "30px",
    width: "195px",
    color: styleVars.white,
    backgroundColor: styleVars.blue,
    borderRadius: styleVars.borderRadius,
    border: `1px solid ${styleVars.blue}`,
    padding: ".5em .75em",
    transition: "0.15s",
    opacity: disabled ? 0.5 : 1,
  })
);

export default FormButton;
