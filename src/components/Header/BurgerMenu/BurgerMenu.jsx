import React, { useState } from "react";
import icons from "../../../images/icons.svg";
import { BurgerBtn, BurgerSvg } from "./BurgerMenu.styled.jsx";

export const Burger = ({ toggleMenu }) => {
  return (
    <BurgerBtn type="button" onClick={toggleMenu}>
      <BurgerSvg>
        <use xlinkHref={`${icons}#icon-menu`}></use>
      </BurgerSvg>
    </BurgerBtn>
  );
};
