import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1440px;
  padding: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.mainBg};
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
  color: ${(props) => props.theme.switchColor};
`;
