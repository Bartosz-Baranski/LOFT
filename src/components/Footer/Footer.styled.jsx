import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.mainBg};
  margin-top: 100px;
`;
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 20px 0px;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 300px;
    flex-direction: row;
  }
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FooterTitle = styled.h3`
  color: ${(props) => props.theme.switchColor};
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
  color: ${(props) => props.theme.switchColor};
  font-size: 22px;
  font-family: "Square Sans Serif 7", sans-serif;
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
