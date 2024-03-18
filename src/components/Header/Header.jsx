import React from "react";
import { ThemeToggler } from "../Theme/ThemeSwitcher";
import { SignUp } from "../SignUp/SignUp";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { MainTitle } from "../MainTitle/MainTitle";
// import { Hamburger } from "./BurgerMenu/BurgerMenu";
// import { CloseMenu } from "./CloseMenu/CloseMenu.jsx";

import {
  HeaderContainer,
  MainHeader,
  // MenuList,
  // MobileMenu,
} from "./Header.styled.jsx";

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };

  return (
    <HeaderContainer>
      <MainHeader>
        <Logo />
        <Navigation />
        <SignUp width={110} height={43} />
        <ThemeToggler />
        {/* <Hamburger toggleMenu={toggleMenu} /> */}
      </MainHeader>
      {/* <MobileMenu open={menuOpen}> */}
      {/* <MenuList> */}
      {/* <CloseMenu onClick={closeMenu} /> */}
      {/* </MenuList> */}
      {/* </MobileMenu> */}
      <MainTitle />
    </HeaderContainer>
  );
};

export default Header;
