import styled from "styled-components";
import { theme } from "../../styles";
import { image1 } from "../../images/backgroundService";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 60px 10px;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image1});
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 100px 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 160px 100px;
  }
`;
export const ServiceContainer = styled.div`
  min-width: 320px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 320px;
`;

export const ServicesElement = styled.li`
  display: block;
  height: 155px;
`;

export const ServicTitle = styled.h3`
  font-size: 20px;
  color: ${theme.switchColor};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;
export const ServiceDescription = styled.p`
  font-size: 18px;
  color: ${theme.switchColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
export const ServicBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${theme.mainBg};
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 140px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    width: 180px;
    height: 50px;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ServiceLink = styled.a`
  text-decoration: none;
  color: ${theme.switchColor};
  ${ServicBtn}:hover &, ${ServicBtn}:active &, ${ServicBtn}:focus & {
    color: black;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
