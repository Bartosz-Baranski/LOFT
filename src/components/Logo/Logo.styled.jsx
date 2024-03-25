import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;

export const LogoIcon = styled.svg`
  fill: #e2b574;
  cursor: pointer;
  width: 100px;
  height: 60px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 160px;
  }
`;
