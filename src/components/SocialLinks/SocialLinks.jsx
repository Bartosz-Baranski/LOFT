import icons from "../../images/icons.svg";
import {
  Container,
  Title,
  SocialList,
  SocialListElement,
  SocialListLink,
  SocialListIcon,
} from "./SocialLinks.styled";

export const SocialLinks = () => {
  return (
    <Container>
      <Title>Follow us</Title>
      <SocialList>
        <SocialListElement>
          <SocialListLink href="https://www.facebook.com/LoftBarberStudio">
            <SocialListIcon width="48" height="48">
              <use href={`${icons}#icon-facebook`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
        <SocialListElement>
          <SocialListLink href="https://www.instagram.com/loftbarberstudio/?igsh=eHY4d3pva2kxeXRy">
            <SocialListIcon width="48" height="48">
              <use href={`${icons}#icon-instagram`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
      </SocialList>
    </Container>
  );
};
