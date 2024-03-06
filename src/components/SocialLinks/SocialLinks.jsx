import icons from "../../images/icons.svg";
import {
  Container,
  Title,
  SocialList,
  SocialListElement,
  SocialListLink,
  SocialListIcon,
} from "./SocialLinks.styled";

export const FollowUs = () => {
  return (
    <Container>
      <Title>Follow us</Title>
      <SocialList>
        <SocialListElement>
          <SocialListLink href="https://www.facebook.com/LoftBarberStudio">
            <SocialListIcon width="26" height="26">
              <use href={`${icons}#icon-facebook`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
        <SocialListElement>
          <SocialListLink href="https://www.instagram.com/loftbarberstudio/?igsh=eHY4d3pva2kxeXRy">
            <SocialListIcon width="32" height="32">
              <use href={`${icons}#icon-instagram`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
        <SocialListElement>
          <SocialListLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
            <SocialListIcon width="26" height="26">
              <use href={`${icons}#icon-booksy`} />
            </SocialListIcon>
          </SocialListLink>
        </SocialListElement>
      </SocialList>
    </Container>
  );
};
