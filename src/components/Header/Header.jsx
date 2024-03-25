import React, { useState } from "react";
import { SignUp } from "../SignUp/SignUp";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Burger } from "./BurgerMenu/BurgerMenu.jsx";
import { HeaderContainer, MainHeader } from "./Header.styled.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        {isOpen ? <Navigation /> : ""}
        <Burger onClick={toggleMenu} />
        <SignUp />
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
