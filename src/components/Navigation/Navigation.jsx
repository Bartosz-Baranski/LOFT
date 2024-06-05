import {
  NaviContener,
  NaviList,
  NaviElement,
  NaviLink,
} from "./Navigation.styled.jsx";

const scrollToSection = (id) => {
  const yOffset = -200;
  const element = document.getElementById(id);
  if (element) {
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      return;
    }
    const y = rect.top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
};

export const Navigation = () => {
  return (
    <NaviContener>
      <NaviList>
        <NaviElement>
          <NaviLink href="/LOFT">Strona Główna</NaviLink>
        </NaviElement>
        <NaviElement>
          <NaviLink onClick={() => scrollToSection("aboutus")}>O nas</NaviLink>
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
