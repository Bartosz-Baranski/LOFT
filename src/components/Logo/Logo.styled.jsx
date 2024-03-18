import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-right: 80px;
  }
`;

export const LogoIcon = styled.svg`
  fill: #e2b574;
  cursor: pointer;
  width: 100px;
  height: 60px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 80px;
  }
`;
