import { image1, image2 } from "../../images/barbers";

import {
  BarbersList,
  BarbersElement,
  BarbersOverlay,
  BarberImg,
  BarbersHidden,
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
        <AboutTit>O nas</AboutTit>
        <AboutDesc>
          LOFT Barber Studio to idealne miejsce dla mężczyzn, którzy pragną
          zadbać o swój wygląd i poczuć się zrelaksowani, doradzimy fryzurę
          dopasowaną idealnie dla Ciebie. Wierzymy w jakość naszych usług i
          oferujemy tylko najwyższej jakości produkty do pielęgnacji zarostu i
          włosów. Naszym celem jest zapewnienie naszym klientom kompleksowej
          obsługi i pomocy w osiągnieciu idealnego wyglądu. Zapraszamy!
        </AboutDesc>
      </AboutUs>
      <BarbersList>
        <BarbersElement>
          <BarbersOverlay>
            <BarberImg src={image1} alt="Barber Radek" />
            <BarbersHidden>
              <BarbersAbaout>
                <BarberName>Radek</BarberName>
                lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40
              </BarbersAbaout>
            </BarbersHidden>
          </BarbersOverlay>
        </BarbersElement>
        <BarbersElement>
          <BarbersOverlay>
            <BarberImg src={image2} alt="Barber Marzena" />
            <BarbersHidden>
              <BarbersAbaout>
                <BarberName>Marzena</BarberName>
                lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem
                ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum
                40lorem ipsum 40lorem ipsum 40lorem ipsum 40lorem ipsum 40
              </BarbersAbaout>
            </BarbersHidden>
          </BarbersOverlay>
        </BarbersElement>
      </BarbersList>
    </AboutContainer>
  );
};
