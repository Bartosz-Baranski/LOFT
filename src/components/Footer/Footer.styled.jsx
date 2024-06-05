import styled from "styled-components";
import { theme } from "../../styles";

export const FooterSection = styled.div`
  width: 100%;
  background-color: ${theme.mainBg};
`;
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 20px 20px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 300px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTitle = styled.h3`
  color: ${theme.switchColor};
  font-size: 32px;
  font-family: "Square Sans Serif 7", sans-serif;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 26px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 38px;
  }
`;

export const FooterLink = styled.a`
  color: ${theme.switchColor};
  font-size: 22px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
    font-size: 26px;
  }

  &:hover,
  &:active,
  &:focus {
    color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const SocialContainer = styled.div``;

export const Invitation = styled.p`
  color: ${theme.switchColor};
  margin: 0 auto;
  font-size: 36px;
  text-align: center;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;
