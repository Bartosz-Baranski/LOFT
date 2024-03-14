import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
`;

export const SocialListLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:active,
  &:focus {
    fill: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SocialListIcon = styled.svg`
  fill: ${(props) => props.theme.switchColor};

  &:hover,
  &:active,
  &:focus {
    fill: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
