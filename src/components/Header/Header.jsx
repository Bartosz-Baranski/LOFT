import React from "react";
import { ThemeToggler } from "../Theme/ThemeSwitcher";
import { SignUp } from "../SignUp/SignUp";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { MainTitle } from "../MainTitle/MainTitle";

import { HeaderContainer, MainHeader } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        <Navigation />
        <SignUp width={143} height={43} />
        <ThemeToggler />
      </MainHeader>
      <MainTitle />
    </HeaderContainer>
  );
};

export default Header;
