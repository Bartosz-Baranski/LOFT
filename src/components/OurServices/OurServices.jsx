import {
  Container,
  ServicesList,
  ServicesElement,
  ServicTitle,
  ServiceDescription,
  ServicBtn,
  ServiceLink,
} from "./OurServices.styled.jsx";

export const OurServices = () => {
  return (
    <Container id="service">
      <ServicesList>
        <ServicesElement>
          <ServicTitle>COMBO PREMIUM</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja
            brody + Piling twarzy + Depilacja woskiem nosa + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>COMBO</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja
            brody + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie włosów</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie brody</ServicTitle>
          <ServiceDescription>
            Trymowanie brody + Pielęgnacja brody
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie dziecka (od 4 do 10 lat)</ServicTitle>
          <ServiceDescription>
            Strzyżenie włosów + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Modelowanie włosów</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Depilacja woskiem</ServicTitle>
          <ServiceDescription>do wyboru: nos, uszy, kark</ServiceDescription>
          <ServicBtn>
            <ServiceLink href="https://booksy.com/pl-pl/182622_loft-barber-studio_barber-shop_10077_wolbrom">
              Zapisz się
            </ServiceLink>
          </ServicBtn>
        </ServicesElement>
      </ServicesList>
    </Container>
  );
};
