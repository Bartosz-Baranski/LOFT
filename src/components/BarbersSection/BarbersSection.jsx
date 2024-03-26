import React, { useState } from "react";
import { image1, image2 } from "../../images/barbers";
import {
  BarbersList,
  BarbersElement,
  BarbersOverlay,
  BarberImg,
  BarbersAbaout,
  BarberName,
  AboutUs,
  AboutDescDiv,
  AboutTit,
  AboutDesc,
  AboutContainer,
  DescBarber,
} from "./BarbersSection.styled";

export const Barbers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const descriptions = [
    {
      name: "Radek",
      text: "Opis dla Radeka...",
    },
    {
      name: "Marzena",
      text: "Opis dla Marzeny...",
    },
  ];

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
      <BarbersList>
        {[image1, image2].map((image, index) => (
          <BarbersElement
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <BarbersOverlay>
              <BarberImg src={image} alt={`Barber ${index + 1}`} />
              {hoveredIndex === index && (
                <DescBarber>
                  <BarberName>{descriptions[index].name}</BarberName>
                  <BarbersAbaout>{descriptions[index].text}</BarbersAbaout>
                </DescBarber>
              )}
            </BarbersOverlay>
          </BarbersElement>
        ))}
      </BarbersList>
    </AboutContainer>
  );
};
