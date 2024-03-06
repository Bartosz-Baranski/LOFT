import React from "react";
import { FollowUs } from "../SocialLinks/SocialLinks";
import { ThemeToggler } from "../Theme/ThemeSwitcher";
import GlobalContainer from "../../styles/global";
import { MainTitle, HeaderContainer, NaviContainer,MainHeader } from "./Header.styled";

const Header = () => {
  return (
    <GlobalContainer>
      <HeaderContainer>
        <MainHeader>
          <MainTitle>LOFT Barber Studio</MainTitle>
          <ThemeToggler />
        </MainHeader>
        <NaviContainer>
          <FollowUs />
        </NaviContainer>
      </HeaderContainer>
    </GlobalContainer>
  );
};

export default Header;
