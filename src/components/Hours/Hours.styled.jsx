import styled from "styled-components";
import { theme } from "../../styles";
import { image11 } from "../../images/index.js";

export const HoursContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 80px 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image11});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 120px 80px;
  }

  @media screen and (min-width: 1440px) {
    padding: 180px 120px;
  }
`;

export const HoursTit = styled.h5`
  color: ${theme.switchBall2};
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 42px;
  }
`;
export const HoursList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const HoursElem = styled.li`
  font-size: 18px;
  line-height: 1.8;
  color: ${theme.switchBall2};
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;

export const SaveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${theme.mainBg};
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 320px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    width: 460px;
    height: 80px;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const SaveLink = styled.a`
  text-decoration: none;
  color: ${theme.switchColor};
  ${SaveBtn}:hover &, ${SaveBtn}:active &, ${SaveBtn}:focus & {
    color: BLACK;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
