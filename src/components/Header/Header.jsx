import React from "react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu.jsx";
import { InvBtn } from "../InvBtn/InvBtn.jsx";
import { HeaderContainer, MainHeader } from "./Header.styled.jsx";

export const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        <Navigation />
        <InvBtn />
        <HamburgerMenu />
      </MainHeader>
    </HeaderContainer>
  );
};
