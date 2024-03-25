import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
  width: auto;
`;

export const Title = styled.h2`
  color: ${theme.switchColor};
  font-size: 36px;
  line-height: 1;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 36px;
  list-style: none;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialListElement = styled.li`
  display: flex;
  align-items: center;
`;

export const SocialListLink = styled.a`
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    fill: green;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SocialListIcon = styled.svg`
  fill: ${theme.switchColor};
  width: 48px;
  height: 48px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }

  &:hover,
  &:active,
  &:focus {
    fill: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
