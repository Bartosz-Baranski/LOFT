import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 20px;
  text-align: left;
  background-color: #34343ef7;

  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ServicesElement = styled.li``;

export const ServicTitle = styled.h3`
  font-size: 32px;
  color: ${theme.switchColor};
`;
export const ServiceDescription = styled.p`
  font-size: 24px;
  color: ${theme.switchColor};
`;
export const ServicBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${theme.mainBg};
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const ServiceLink = styled.a`
  text-decoration: none;
  color: ${theme.switchColor};
  &:hover,
  &:active,
  &:focus {
    color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
