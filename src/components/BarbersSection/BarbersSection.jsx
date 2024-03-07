import { image1, image2 } from "../../images/barbers";

import GlobalContainer from "../../styles/global";
import {
  BarbersList,
  BarbersElement,
  BarbersOverlay,
  BarberImg,
  BarbersHidden,
  BarbersAbaout,
} from "./BarbersSection.styled";

export const Barbers = () => {
  return (
    <GlobalContainer>
      <BarbersList>
        <BarbersElement>
          <BarbersOverlay>
            <BarberImg src={image1} alt="Barber Radek" />
            <BarbersHidden>
              <BarbersAbaout>
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
    </GlobalContainer>
  );
};
