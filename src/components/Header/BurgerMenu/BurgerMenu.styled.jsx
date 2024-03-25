import styled from "styled-components";
import { theme } from "../../styles";

export const BurgerSvg = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${theme.switchColor};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
