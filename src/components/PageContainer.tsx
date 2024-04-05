import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import { TodoContextProvider } from "contexts/todoContext";
import { ReactNode } from "react";
import { cssReset, htmlBodyStyle } from "../globalStyles";

const Container = styled.div({
  width: "475px",
  display: "flex",
  gap: "3em",
  alignItems: "center",
  flexDirection: "column",
});

const PageContainer = ({ children }: { children: ReactNode }) => (
  <Container>
    <Global styles={cssReset} />
    <Global styles={htmlBodyStyle} />
    <TodoContextProvider>{children}</TodoContextProvider>
  </Container>
);

export default PageContainer;
