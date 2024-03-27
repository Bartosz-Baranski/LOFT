import styled from "styled-components";
import { image7 } from "../../images/index.js";
import { theme } from "../../styles/index.js";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${theme.mainBg};
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image7});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 80px;
  }

  @media screen and (min-width: 1440px) {
    padding: 160px;
  }
`;

export const AboutDescDiv = styled.div`
  max-width: 1440px;
`;

export const AboutTit = styled.h5`
  color: ${theme.switchBall2};
  line-height: 1.8;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;
export const AboutDesc = styled.p`
  color: ${theme.switchBall2};
  font-size: 16px;
  line-height: 1.8;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 34px;
  }
`;
