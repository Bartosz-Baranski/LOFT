import React from "react";
import { SignUp } from "../SignUp/SignUp";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

import { HeaderContainer, MainHeader } from "./Header.styled.jsx";

const Header = () => {
  return (
    <HeaderContainer >
      <MainHeader>
        <Logo />
        <Navigation />
        <SignUp width={200} height={80} />
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
