import icons from "../../images/icons.svg";
import { SocialLinks } from "../SocialLinks/SocialLinks.jsx";
import { MainTit, MainIcon } from "./MainTitle.styled.jsx";

export const MainTitle = () => {
  return (
    <MainTit id="header">
      <MainIcon>
        <use href={`${icons}#icon-logo_negativ`} />
      </MainIcon>
      <SocialLinks />
    </MainTit>
  );
};
