import React from "react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Burger } from "./BurgerMenu/BurgerMenu.jsx";
import { InvBtn } from "../InvBtn/InvBtn.jsx";
import { HeaderContainer, MainHeader } from "./Header.styled.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        <Navigation />
        <InvBtn />
        <Burger />
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
