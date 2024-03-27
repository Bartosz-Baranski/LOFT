import icons from "../../images/icons.svg";

import { LogoIcon, LogoContainer } from "./Logo.styled.jsx";

export const Logo = () => {
  return (
    <LogoContainer>
      <a href="/LOFT">
        <LogoIcon>
          <use href={`${icons}#icon-logo_header`} />
        </LogoIcon>
      </a>
    </LogoContainer>
  );
};
