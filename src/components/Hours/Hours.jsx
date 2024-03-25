import React from "react";

import {
  HoursContainer,
  HoursTit,
  HoursList,
  HoursElem,
  SaveBtn,
  SaveLink,
} from "./Hours.styled.jsx";

export const OpeningHours = () => {
  return (
    <HoursContainer>
      <HoursTit>Godziny otwarcia</HoursTit>
      <HoursList>
        <HoursElem>Poniedziałek: 9:00 - 18:00</HoursElem>
        <HoursElem>Wtorek: 9:00 - 18:00</HoursElem>
        <HoursElem>Środa: 9:00 - 18:00</HoursElem>
        <HoursElem>Czwartek: 9:00 - 18:00</HoursElem>
        <HoursElem>Piątek: 9:00 - 18:00</HoursElem>
        <HoursElem>Sobota: 8:00 - 13:00</HoursElem>
        <HoursElem>Niedziela: Zamknięte</HoursElem>
      </HoursList>

      <SaveBtn>
        <SaveLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
          Zapisz się
        </SaveLink>
      </SaveBtn>
      <SaveBtn>
        <SaveLink href="tel:+48 692 288 466">Zadzwoń</SaveLink>
      </SaveBtn>
    </HoursContainer>
  );
};
