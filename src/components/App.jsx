import Header from "./Header/Header.jsx";

import GlobalContainer from "../styles/global.jsx";
import { Barbers } from "./BarbersSection/BarbersSection.jsx";
import Carousel from "./Carousel/Carousel.jsx";

const App = () => {
  return (
    <div className="App">
      <GlobalContainer>
        <Header />
        <Barbers />
        <Carousel />
      </GlobalContainer>
    </div>
  );
};
export default App;
