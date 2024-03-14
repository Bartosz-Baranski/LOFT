import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
`;

export const AboutUs = styled.div`
  background-color: ${(props) => props.theme.mainBg};
  width: 1440px;
`;

export const AboutTit = styled.h5`
  color: ${(props) => props.theme.switchColor};
  font-family: "Poppins", sans-serif;

  line-height: 1.8;
  font-size: 38px;
  padding-top: 10px;
  padding-left: 20px;
`;
export const AboutDesc = styled.p`
  color: ${(props) => props.theme.switchColor};
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  line-height: 1.8;
  padding: 20px;
`;

export const BarbersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 40px;
  gap: 60px;
  width: 1440px;
  align-items: center;
  justify-content: center;
`;

export const BarbersElement = styled.li`
  flex-basis: calc((100% - 60px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarbersHidden = styled.div`
  position: relative;
  width: 420px;
  height: 300px;
  background-color: ${(props) => props.theme.mainBg};
  transform: translateY(100%);
  transition: var(--transition-active);
  visibility: hidden;
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
  width: 420px;
  height: 560px;
  transition: box-shadow 0.3s ease;
  z-index: 1;
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
  font-size: 28px;

  text-align: left;
`;

export const BarbersAbaout = styled.p`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${(props) => props.theme.switchColor};
  font-size: 22px;
  line-height: 1.55;
  text-align: left;
`;
