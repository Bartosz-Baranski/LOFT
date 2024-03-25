import { image1, image2 } from "../../images/barbers";

import {
  BarbersList,
  BarbersElement,
  BarbersOverlay,
  BarberImg,
  BarbersAbaout,
  BarberName,
  AboutUs,
  AboutTit,
  AboutDesc,
  AboutContainer,
} from "./BarbersSection.styled";

export const Barbers = () => {
  return (
    <AboutContainer>
      <AboutUs id="about">
        <AboutTit>LOFT Barber Studio </AboutTit>
        <AboutDesc>
          Idealne miejsce dla mężczyzn, którzy pragną zadbać o swój wygląd i
          poczuć się zrelaksowanym, doradzimy fryzurę dopasowaną idealnie dla
          Ciebie. Wierzymy w jakość naszych usług i oferujemy tylko najwyższej
          jakości produkty do pielęgnacji zarostu i włosów. Naszym celem jest
          zapewnienie naszym klientom kompleksowej obsługi i pomocy w
          osiągnieciu idealnego wyglądu. Zapraszamy!
        </AboutDesc>
      </AboutUs>
      <BarbersList>
        <BarbersElement>
          <BarbersOverlay>
            <BarberImg src={image1} alt="Barber Radek" />
            <BarberName>Radek</BarberName>
            <BarbersAbaout>
              Jakieś pierdu pierdu, miał cos Mateusz wymyslic chyba ze nie
              chcecie to usune ten elemenet, ale wkoncu moglbys sie wypowedziec
              co i jak
            </BarbersAbaout>
          </BarbersOverlay>
        </BarbersElement>
        <BarbersElement>
          <BarbersOverlay>
            <BarberImg src={image2} alt="Barber Marzena" />

            <BarberName>Marzena</BarberName>
            <BarbersAbaout>
              Jakieś pierdu pierdu, miał cos Mateusz wymyslic chyba ze nie
              chcecie to usune ten elemenet, ale wkoncu moglbys sie wypowedziec
              co i jak
            </BarbersAbaout>
          </BarbersOverlay>
        </BarbersElement>
      </BarbersList>
    </AboutContainer>
  );
};
