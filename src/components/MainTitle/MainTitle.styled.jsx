import styled from "styled-components";
import { theme } from "../../styles";
import { image5 } from "../../images/index.js";

export const MainTit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image5});
  background-position: center;
  background-size: cover;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 105px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 165px;
    width: 100%;
  }
`;

export const MainIcon = styled.svg`
  width: 280px;
  height: 280px;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 480px;
  }
`;

export const Invitation = styled.p`
  color: ${theme.switchColor};
  margin: 0 auto;
  font-size: 24px;
  text-align: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;
