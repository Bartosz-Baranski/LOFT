import React from "react";
import GlobalContainer from "../../styles/global.jsx";
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Footer/Footer.jsx";

export const Wrapper = ({ children }) => {
  return (
    <GlobalContainer>
      <Header />
      {children}
      <Footer />
    </GlobalContainer>
  );
};
