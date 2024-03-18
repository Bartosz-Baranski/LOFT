import { SocialLinks } from "../SocialLinks/SocialLinks.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";

import {
  FooterContainer,
  FooterAddress,
  FooterTitle,
  FooterLink,
  FooterSection,
} from "./Footer.styled.jsx";

export const Footer = () => {
  return (
    <FooterSection id="contact">
      <FooterContainer>
        <FooterAddress>
          <FooterTitle>LOFT Barber Studio</FooterTitle>
          <FooterLink href="https://www.google.com/maps/dir//Pi%C5%82sudskiego+53,+32-340+Wolbrom/@50.2280006,19.4945267,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4717030be4aa1d35:0x8317d03dd494621!2m2!1d19.7619313!2d50.3825003?entry=ttu">
            ul. marsz. Józefa Piłsudskiego 53,
            <br /> 32-340, Wolbrom
          </FooterLink>
          <FooterLink href="tel:+48 692 288 466">
            tel: +48 692 288 466
          </FooterLink>
        </FooterAddress>
        <SignUp width={220} height={96} />
        <SocialLinks />
      </FooterContainer>
    </FooterSection>
  );
};
