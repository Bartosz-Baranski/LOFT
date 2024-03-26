import styled from "styled-components";
import { theme } from "../../styles";
import { image5 } from "../../images/index.js";

export const MainTit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 80px 40px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image5});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 80px 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 80px;
  }
`;

export const MainIcon = styled.svg`
  width: 280px;
  height: 240px;
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
  font-size: 18px;
  text-align: center;
  background-color: transparent;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding-top: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
    padding-top: 60px;
  }
`;
