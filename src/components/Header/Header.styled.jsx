import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.mainBg};
  z-index: 999;
  padding-bottom: 40px;
  color: #a8a7a7;
`;

export const MainHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
