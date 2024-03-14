import icons from "../../images/icons.svg";

import { Container, SocialListLink, SocialListIcon } from "./SignUp.styled.jsx";

export const SignUp = ({ width, height }) => {
  return (
    <Container>
      <SocialListLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
        <SocialListIcon width={width} height={height}>
          <use href={`${icons}#icon-booksy-seeklogo`} />
        </SocialListIcon>
      </SocialListLink>
    </Container>
  );
};
