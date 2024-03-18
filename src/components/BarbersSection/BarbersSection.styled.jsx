import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    margin-top: 300px;
  }
`;

export const AboutUs = styled.div`
  background-color: ${(props) => props.theme.mainBg};
  width: 100%;
`;

export const AboutTit = styled.h5`
  color: ${(props) => props.theme.switchColor};
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
  font-size: 18px;
  padding-top: 10px;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;
export const AboutDesc = styled.p`
  color: ${(props) => props.theme.switchColor};
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  padding: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 26px;
  }
`;

export const BarbersList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 40px;

  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

export const BarbersElement = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 60px) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 60px) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BarbersHidden = styled.div`
  position: relative;
  width: 320px;
  height: 300px;
  background-color: ${(props) => props.theme.mainBg};
  transform: translateY(100%);
  transition: var(--transition-active);
  visibility: hidden;
  @media screen and (min-width: 768px) {
    width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 420px;
  }
`;

export const BarbersOverlay = styled.div`
  position: relative;
  overflow: hidden;
  width: auto;
  &:hover ${BarbersHidden}, &:focus ${BarbersHidden} {
    transform: translateY(0%);
    visibility: visible;
  }
`;

export const BarberImg = styled.img`
  display: block;
  width: 320px;
  height: 400px;
  transition: box-shadow 0.3s ease;
  z-index: 1;
  @media screen and (min-width: 768px) {
    width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 420px;
    height: 550px;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.2);
    z-index: 5;
  }
`;

export const BarberName = styled.h3`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${(props) => props.theme.switchColor};
  font-size: 18px;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const BarbersAbaout = styled.p`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${(props) => props.theme.switchColor};
  font-size: 18px;
  line-height: 1.55;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;
