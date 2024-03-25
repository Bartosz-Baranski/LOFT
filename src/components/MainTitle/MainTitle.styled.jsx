import styled from "styled-components";
import { image5 } from "../../images/index.js";

export const MainTit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${image5});
  background-position: center;
  background-size: cover;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 105px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 165px;
  }
`;

export const MainIcon = styled.svg`
  width: 280px;
  height: 280px;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 480px;
  }
`;

// export const MainTit = styled.h1`
//   color: #e2b574;
//   margin: 0 auto;
//   font-size: 36px;
//   letter-spacing: 25px;
//   text-align: center;
//   font-weight: 700;
//   display: flex;
//   flex-direction: column;

//   font-family: "Square Sans Serif 7", sans-serif;
//   background-color: transparent;

//   @media screen and (min-width: 768px) {
//     font-size: 66px;
//     letter-spacing: 25px;
//   }

//   @media screen and (min-width: 1440px) {
//     font-size: 86px;
//     letter-spacing: 25px;
//   }
// `;

// export const Subtitle = styled.p`
//   font-size: 22px;
//   text-align: center;
//   color: ${theme.switchColor};

//   @media screen and (min-width: 1440px) {
//     font-size: 36px;
//   }
// `;
