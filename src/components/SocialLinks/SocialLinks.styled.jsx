import styled from "styled-components";

export const Container = styled.div`
  width: auto;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.switchColor};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 18px;
  height: 26px;
  list-style: none;
  justify-content: flex-start;
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
  fill: ${(props) => props.theme.switchColor};

  &:hover,
  &:active,
  &:focus {
    fill: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
