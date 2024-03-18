import icons from "../../../images/icons.svg";

import { CloseIcon, BurgerBtnClose } from "./CloseMenu.styled.jsx";

export const CloseMenu = ({ closeMenu }) => {
  return (
    <BurgerBtnClose type="button" onClick={closeMenu}>
      <CloseIcon>
        <use xlinkHref={`${icons}#icon-cross`}></use>
      </CloseIcon>
    </BurgerBtnClose>
  );
};
