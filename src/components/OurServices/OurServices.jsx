import React, { useState } from "react";
import {
  Container,
  ServicesList,
  ServicesElement,
  ServicTitle,
  ServiceDescription,
  ServicBtn,
  ServiceLink,
  ServiceContainer,
} from "./OurServices.styled.jsx";

const services = [
  {
    title: "COMBO PREMIUM",
    description:
      "Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja brody + Piling twarzy + Depilacja woskiem nosa + Stylizacja włosów",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "COMBO",
    description:
      "Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja brody + Stylizacja włosów",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "Strzyżenie włosów",
    description: "Mycie głowy + Strzyżenie włosów + Stylizacja włosów",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "Strzyżenie brody",
    description: "Trymowanie brody + Pielęgnacja brody",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "Strzyżenie dziecka (od 4 do 10 lat)",
    description: "Strzyżenie włosów + Stylizacja włosów",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "Modelowanie włosów",
    description: "Mycie głowy + Stylizacja włosów",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
  {
    title: "Depilacja woskiem",
    description: "do wyboru: nos, uszy, kark",
    link: "https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom",
  },
];

export const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container id="service">
      <ServiceContainer>
        <ServicesList>
          {services.map((service, index) => (
            <ServicesElement key={index}>
              <ServicTitle
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {service.title}
              </ServicTitle>
              {hoveredIndex === index && (
                <ServiceDescription>{service.description}</ServiceDescription>
              )}
              <ServicBtn>
                <ServiceLink href={service.link}>Zapisz się</ServiceLink>
              </ServicBtn>
            </ServicesElement>
          ))}
        </ServicesList>
      </ServiceContainer>
    </Container>
  );
};
