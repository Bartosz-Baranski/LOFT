import styled from "styled-components";
import { theme } from "../../styles/index.js";
import { image1 } from "../../images/index.js";

export const BarbersContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image1});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 120px 80px;
  }

  @media screen and (min-width: 1440px) {
    padding: 180px 120px;
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
  height: 1200px;
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
`;

export const BarberImg = styled.img`
  display: block;
  min-width: 320px;
  height: auto;

  @media screen and (min-width: 768px) {
    min-width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 690px;
  }
  /* &:hover,
  &:active,
  &:focus {
    scale: 1.2;
  } */
`;

export const BarberName = styled.h3`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${theme.switchColor};
  font-size: 28px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;

export const BarbersAbaout = styled.p`
  padding: 10px;
  margin: auto;
  color: ${theme.switchColor};
  font-size: 18px;
  line-height: 1.55;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const DescBarber = styled.div`
  display: block;
`;
