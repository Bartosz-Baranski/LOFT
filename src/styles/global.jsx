import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { image1 } from "../images/index.js";
export const GlobalStyles = createGlobalStyle`
  ${normalize}
 
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins','Square Sans Serif 7', sans-serif;
    background-color: ${(props) => props.theme.mainBg};
    /* background-image: url('${(props) => props.theme.bckgImages[0]}'); */
    background-image: url(${image1});
  background-repeat: no-repeat;
  background-position: center -500px ;
  background-size: cover;
  background-attachment: fixed;
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
  max-width: 1440px;
  margin: 20px auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px;
  }
`;
export default GlobalContainer;
