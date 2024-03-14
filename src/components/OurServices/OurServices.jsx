import {
  Container,
  ServicesList,
  ServicesElement,
  ServicTitle,
  ServiceDescription,
  ServicBtn,
} from "./OurServices.styled.jsx";

export const OurServices = () => {
  return (
    <Container>
      <ServicesList>
        <ServicesElement>
          <ServicTitle>COMBO PREMIUM</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja
            brody + Piling twarzy + Depilacja woskiem nosa + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>COMBO</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Trymowanie brody + Pielęgnacja
            brody + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie włosów</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Strzyżenie włosów + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie brody</ServicTitle>
          <ServiceDescription>
            Trymowanie brody + Pielęgnacja brody
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Strzyżenie dziecka (od 4 do 10 lat)</ServicTitle>
          <ServiceDescription>
            Strzyżenie włosów + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Modelowanie włosów</ServicTitle>
          <ServiceDescription>
            Mycie głowy + Stylizacja włosów
          </ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
        <ServicesElement>
          <ServicTitle>Depilacja woskiem</ServicTitle>
          <ServiceDescription>do wyboru: nos, uszy, kark</ServiceDescription>
          <ServicBtn>Zapisz się</ServicBtn>
        </ServicesElement>
      </ServicesList>
    </Container>
  );
};
