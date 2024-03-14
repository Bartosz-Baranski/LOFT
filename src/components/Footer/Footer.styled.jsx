import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.mainBg};
  margin-top: 100px;
`;
export const FooterContainer = styled.footer`
  display: flex;
  width: 1440px;
  margin: 0 auto;
  height: 300px;
  justify-content: space-evenly;
  align-items: center;
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h3`
  color: ${(props) => props.theme.switchColor};
  font-size: 32px;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.switchColor};
  font-size: 22px;

  &:hover,
  &:active,
  &:focus {
    color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
