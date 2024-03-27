import React from "react";

import { Wrapper } from "../../components/Wrapper/Wrapper.jsx";
import { Barbers } from "../../components/Barbers/Barbers.jsx";

import { AboutUsContainer } from "./AboutUs.styled.jsx";

export const AboutUsPage = () => {
  return (
    <Wrapper>
      <AboutUsContainer>
        <Barbers />
      </AboutUsContainer>
    </Wrapper>
  );
};
