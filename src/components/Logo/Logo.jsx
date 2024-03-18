import icons from "../../images/icons.svg";

import { LogoIcon, LogoContainer } from "./Logo.styled.jsx";

const scrollToSection = (id) => {
  const yOffset = -300;
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const Logo = () => {
  return (
    <LogoContainer>
      <a href="#about" onClick={() => scrollToSection("about")}>
        <LogoIcon>
          <use href={`${icons}#icon-logo`} />
        </LogoIcon>
      </a>
    </LogoContainer>
  );
};
