import styled from "styled-components";

export const MainTit = styled.h1`
  color: #e2b574;
  margin: 0 auto;
  font-size: 36px;
  letter-spacing: 25px;
  text-align: center;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  font-family: "Square Sans Serif 7", sans-serif;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 66px;
    letter-spacing: 25px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 86px;
    letter-spacing: 25px;
  }
`;

export const Subtitle = styled.p`
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.switchColor};

  @media screen and (min-width: 1440px) {
    font-size: 36px;
  }
`;
