import icons from "../../images/icons.svg";
import { SocialLinks } from "../SocialLinks/SocialLinks.jsx";
import { MainTit, MainIcon, Invitation } from "./MainTitle.styled.jsx";

export const MainTitle = () => {
  return (
    <MainTit id="header">
      <MainIcon>
        <use href={`${icons}#icon-logo_main`} />
      </MainIcon>
      <Invitation>
        Chcesz być na bieżąco z tym co się dzieje w naszym barbershopie?
        <br /> Dołącz do nas
      </Invitation>
      <SocialLinks />
    </MainTit>
  );
};
