import Header from "./Header/Header.jsx";

import GlobalContainer from "../styles/global.jsx";
import { Barbers } from "./BarbersSection/BarbersSection.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { OurServices } from "./OurServices/OurServices.jsx";

const App = () => {
  return (
    <div className="App">
      <GlobalContainer>
        <Header />
        <Barbers />
        <OurServices />
        <Carousel />
      </GlobalContainer>
      <Footer />
    </div>
  );
};
export default App;
