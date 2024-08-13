import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage/MainPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/LOFT" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
