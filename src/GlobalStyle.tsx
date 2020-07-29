import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-size: 10px;
    background-color: #f4f6f8;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, SF Pro Text, Arial, sans-serif;
  }
`;
