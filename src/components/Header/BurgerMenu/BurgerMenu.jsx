import React from "react";
import icons from "../../../images/icons.svg";
import { BurgerSvg, BurgerBtn } from "./BurgerMenu.styled.jsx";

export const Hamburger = ({ toggleMenu }) => {
  return (
    <BurgerBtn type="button" onClick={toggleMenu}>
      <BurgerSvg>
        <use xlinkHref={`${icons}#icon-menu`}></use>
      </BurgerSvg>
    </BurgerBtn>
  );
};
