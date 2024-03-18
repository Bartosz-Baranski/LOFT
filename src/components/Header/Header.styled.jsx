import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${(props) => props.theme.mainBg};
  z-index: 2;
  padding-bottom: 10px;
  color: #a8a7a7;
`;

export const MainHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const MobileMenu = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bckColorMobile};
  z-index: 9;
`;
export const MenuList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  top: 20%;
  right: 20%;

  transform: translate(-50%, -50%);
  padding: 20px;
`;
