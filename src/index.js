import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./styles";
import App from "./components/App.jsx";

const Root = () => {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
