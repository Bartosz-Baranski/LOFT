import React from "react";

import {
  AboutUs,
  AboutDescDiv,
  AboutTit,
  AboutDesc,
  AboutContainer,
} from "./About.styled";

export const About = () => {
  return (
    <AboutContainer>
      <AboutUs id="about">
        <AboutDescDiv>
          <AboutTit>LOFT Barber Studio </AboutTit>
          <AboutDesc>
            Idealne miejsce dla mężczyzn, którzy pragną zadbać o swój wygląd i
            poczuć się zrelaksowanym, doradzimy fryzurę dopasowaną idealnie dla
            Ciebie. Wierzymy w jakość naszych usług i oferujemy tylko najwyższej
            jakości produkty do pielęgnacji zarostu i włosów. Naszym celem jest
            zapewnienie naszym klientom kompleksowej obsługi i pomocy w
            osiągnieciu idealnego wyglądu. Podczas oczekiwania na wizytę
            proponujemy ulubione napoje, w tym whisky. Zapraszamy!
          </AboutDesc>
        </AboutDescDiv>
      </AboutUs>
    </AboutContainer>
  );
};
