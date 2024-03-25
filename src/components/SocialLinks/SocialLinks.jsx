import icons from "../../images/icons.svg";
import {
  Container,
  SocialList,
  SocialListElement,
  SocialListLink,
  SocialListIcon,
} from "./SocialLinks.styled";

export const SocialLinks = () => {
  return (
    <Container>
      <SocialList>
        <SocialListElement>
          <SocialListLink href="https://www.facebook.com/LoftBarberStudio">
            <SocialListIcon>
              <use href={`${icons}#icon-facebook`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
        <SocialListElement>
          <SocialListLink href="https://www.instagram.com/loftbarberstudio/?igsh=eHY4d3pva2kxeXRy">
            <SocialListIcon>
              <use href={`${icons}#icon-instagram`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
      </SocialList>
    </Container>
  );
};
