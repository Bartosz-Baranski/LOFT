import React from "react";
import { SignUp } from "../SignUp/SignUp";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Burger } from "./BurgerMenu/BurgerMenu.jsx";
import { HeaderContainer, MainHeader } from "./Header.styled.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        <Navigation />
        <SignUp width={200} height={100} />
        <Burger />
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
