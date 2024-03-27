import styled from "styled-components";
import { theme } from "../../styles";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

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

export const MenuList = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 70%;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
