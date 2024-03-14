import styled from "styled-components";

export const MainTit = styled.h1`
  color: #e2b574;
  margin: 0 auto;
  font-size: 86px;
  letter-spacing: 25px;
  text-align: center;
  font-weight: 700;
  font-family: "Square Sans Serif 7", sans-serif !important;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.switchColor};
`;
