import React, { useState } from "react";
import { image1, image2 } from "../../images/barbers";

import {
  BarbersContainer,
  BarbersList,
  BarbersElement,
  BarbersOverlay,
  BarberImg,
  BarbersAbaout,
  BarberName,
  DescBarber,
} from "./Barbers.styled.jsx";

export const Barbers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const descriptions = [
    {
      name: "Radek",
      text: "Opis dla Radka...",
    },
    {
      name: "Marzena",
      text: "Opis dla Marzeny...",
    },
  ];
  return (
    <BarbersContainer id="aboutus">
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
    </BarbersContainer>
  );
};
