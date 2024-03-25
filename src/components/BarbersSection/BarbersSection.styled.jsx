import styled from "styled-components";
import { image7 } from "../../images/index.js";
import { theme } from "../../styles";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AboutUs = styled.div`
  background-color: ${theme.mainBg};
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image7});
  background-position: center;
  background-size: cover;
`;

export const AboutTit = styled.h5`
  color: ${theme.switchBall2};
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
  font-size: 32px;
  padding-top: 10px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;
export const AboutDesc = styled.p`
  color: ${theme.switchBall2};
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 1.8;
  padding: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const BarbersList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 60px;
    max-width: 1440px;
  }
`;

export const BarbersElement = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 60px) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BarbersOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  border: 1px solid black;
`;

export const BarberImg = styled.img`
  display: block;
  min-width: 320px;
  height: auto;

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 620px;
  }
`;

export const BarberName = styled.h3`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${theme.switchColor};
  font-size: 32px;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const BarbersAbaout = styled.p`
  padding: 10px;
  margin: auto;
  color: ${theme.switchColor};
  font-size: 24px;
  line-height: 1.55;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
