import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  min-width: 320px;
  height: auto;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const CarouselImg = styled.img`
  min-width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 800px;
  }

  @media screen and (min-width: 1440px) {
    width: 1200px;
    height: 1000px;
  }
`;

export const CarouselButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;

  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CarouselButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LeftSvg = styled.svg`
  width: 28px;
  height: 28px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
  }
`;
export const RightSvg = styled.svg`
  width: 28px;
  height: 28px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
  }
`;
