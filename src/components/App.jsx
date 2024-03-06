import Header from "./Header/Header.jsx";

import GlobalContainer from "../styles/global.jsx";
import Carousel from "./Carousel/Carousel.jsx";

const App = () => {
  return (
    <div className="App">
      <GlobalContainer>
        <Header />
        <Carousel />
      </GlobalContainer>
    </div>
  );
};
export default App;
