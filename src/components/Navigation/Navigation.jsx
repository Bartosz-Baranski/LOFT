
import {
  NaviContener,
  NaviList,
  NaviElement,
  NaviLink,
} from "./Navigation.styled.jsx";

const scrollToSection = (id) => {
  const yOffset = -200;
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export const Navigation = () => {
  return (
    <NaviContener>
      <NaviList>
        <NaviElement>
          <NaviLink href="/aboutus">O nas</NaviLink>
        </NaviElement>
        <NaviElement>
          <NaviLink onClick={() => scrollToSection("service")}>Usługi</NaviLink>
        </NaviElement>
        <NaviElement>
          <NaviLink onClick={() => scrollToSection("gallery")}>
            Galeria
          </NaviLink>
        </NaviElement>
        <NaviElement>
          <NaviLink onClick={() => scrollToSection("contact")}>
            Kontakt
          </NaviLink>
        </NaviElement>
      </NaviList>
    </NaviContener>
  );
};
