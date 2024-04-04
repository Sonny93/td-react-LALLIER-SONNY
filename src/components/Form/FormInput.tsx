import styled from "@emotion/styled";
import { styleVars } from "globalStyles";

const FormInput = styled.input({
  padding: ".5em .75em",
  border: `1px solid ${styleVars.lightGray}`,
  borderRadius: styleVars.borderRadius,
  transition: ".15s",

  "&:focus, &:hover": {
    borderColor: styleVars.blue,
  },
});

export default FormInput;
