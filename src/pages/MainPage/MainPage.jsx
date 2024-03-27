import React from "react";

import { Wrapper } from "../../components/Wrapper/Wrapper.jsx";
import { MainTitle } from "../../components/MainTitle/MainTitle.jsx";
import { About } from "../../components/About/About.jsx";
import { OpeningHours } from "../../components/Hours/Hours.jsx";
import { OurServices } from "../../components/OurServices/OurServices.jsx";
import { Carousel } from "../../components/Carousel/Carousel";

import { MainPageContainer } from "./MainPage.styled.jsx";

export const MainPage = () => {
  return (
    <Wrapper>
      <MainPageContainer>
        <MainTitle />
        <About />
        <OpeningHours />
        <OurServices />
        <Carousel />
      </MainPageContainer>
    </Wrapper>
  );
};
