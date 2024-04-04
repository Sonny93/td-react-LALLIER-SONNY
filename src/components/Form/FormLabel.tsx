import styled from "@emotion/styled";
import { styleVars } from "globalStyles";

const FormLabel = styled.label<{ required?: boolean }>(({ required }) => ({
  position: "relative",
  width: "fit-content",
  fontSize: ".9em",
  color: styleVars.gray,
  "&:after": {
    content: required ? "'*'" : ("''" as string),
    position: "absolute",
    top: 0,
    right: "-.5em",
    color: styleVars.red,
  },
}));

export default FormLabel;
