import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 50px auto 0 auto;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 1000px;
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
