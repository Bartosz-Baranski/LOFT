import styled from "styled-components";
import { theme } from "../../styles";

export const InvButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${theme.bckColorMobile};
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 280px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    width: 320px;
    height: 60px;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const InvLink = styled.a`
  text-decoration: none;
  color: ${theme.switchColor};
  ${InvButton}:hover &, ${InvButton}:active &, ${InvButton}:focus & {
    color: BLACK;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
