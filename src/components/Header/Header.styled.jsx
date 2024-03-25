import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.mainBg};
  z-index: 2;
  padding-bottom: 10px;
  color: #a8a7a7;
`;

export const MainHeader = styled.div`
  display: flex;
  min-width: 320px;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;

    flex-direction: row;
  }
`;
