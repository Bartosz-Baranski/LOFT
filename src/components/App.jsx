import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage.jsx";
import { AboutUsPage } from "../pages/AboutUs/AboutUs.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LOFT" element={<MainPage />} />
        <Route path="/LOFT/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
