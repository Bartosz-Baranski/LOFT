import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme.js";
export const GlobalStyles = createGlobalStyle`
  ${normalize}
 
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins','Square Sans Serif 7', sans-serif;
    background-color: ${theme.mainBg};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export default GlobalContainer;
