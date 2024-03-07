import styled from "styled-components";

export const BarbersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 40px;
  gap: 60px;
`;

export const BarbersElement = styled.li`
  flex-basis: calc((100% - 90px) / 2);
`;

export const BarbersHidden = styled.div`
  position: relative;
  width: 420px;
  height: 300px;
  background-color: grey;
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

export const BarbersAbaout = styled.p`
  display: block;
  padding: 10px;
  margin: auto;
  color: ${(props) => props.theme.switchColor};
  font-size: 22px;
  line-height: 1.55;
  text-align: left;
`;
