import { css } from "@emotion/react";

export const styleVars = {
  lightBlack: "rgba(0, 0, 0, 0.1)",
  black: "#555",
  darkBlack: "rgba(0, 0, 0, 0.5)",
  white: "#fff",
  blue: "#3f88c5",
  gray: "#aaaaaa",
  lightGray: "#dadce0",
  red: "red",
  borderRadius: "3px",
};

export const cssReset = css({
  "*": {
    boxSizing: "border-box",
    outline: 0,
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
  },

  "ul, li": {
    listStyle: "none",
  },

  ".reset": {
    backgroundColor: "inherit",
    color: "inherit",
    padding: 0,
    margin: 0,
    border: 0,
  },

  a: {
    width: "fit-content",
    color: "#3f88c5",
    textDecoration: "none",
    borderBottom: "1px solid transparent",
  },

  b: {
    fontWeight: 600,
    letterSpacing: "0.5px",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontWeight: "400",
    margin: ".75em 0",
  },
});

export const htmlBodyStyle = css({
  "html, body": {
    height: "100svh",
    width: "100svw",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "17px",
    color: styleVars.black,
    backgroundColor: styleVars.white,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
  },
});
