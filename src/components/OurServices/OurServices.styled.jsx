import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  padding: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.mainBg};
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ServicesElement = styled.li``;

export const ServicTitle = styled.h3`
  font-size: 26px;
  color: ${(props) => props.theme.switchColor};
`;
export const ServiceDescription = styled.p`
  font-size: 22px;
  color: ${(props) => props.theme.switchColor};
`;
export const ServicBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.mainBg};
`;

export const ServiceLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.switchColor};
  &:hover,
  &:active,
  &:focus {
    color: #e2b574;
    transition-duration: 300ms;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
