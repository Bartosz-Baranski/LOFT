import React, { useState } from "react";
import icons from "../../images/icons.svg";

import { MobileNavi } from "./MobileNavi/MobileNavi.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";

import {
  BurgerBtn,
  BurgerSvg,
  MenuContainer,
  MenuList,
} from "./HamburgerMenu.styled.jsx";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled. isOpen:", !isOpen);
  };

  return (
    <MenuContainer>
      <BurgerBtn type="button" onClick={toggleMenu}>
        <BurgerSvg>
          <use xlinkHref={`${icons}#icon-menu`}></use>
        </BurgerSvg>
      </BurgerBtn>
      <MenuList isOpen={isOpen}>
        <MobileNavi />
        <SignUp width={120} height={60} />
      </MenuList>
    </MenuContainer>
  );
};
