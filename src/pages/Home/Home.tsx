import { OutlineLightButton } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { AuctionBox, Container, SaleBox } from "./styles";
import { Footer } from "../../components/Footer/Footer";
import CarouselAuction from "../../components/CarouselAuction";
import CarouselSale from "../../components/CarouselSale";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <section className="main-coverPage">
          <h3>Velocidade e experiência em um lugar feito para você</h3>
          <p>Um ambiente feito para você explorar o seu melhor</p>
          <div>
            <OutlineLightButton>Leilão</OutlineLightButton>
            <OutlineLightButton>Carros</OutlineLightButton>
            <OutlineLightButton>Motos</OutlineLightButton>
          </div>
        </section>
      </Container>
      <AuctionBox>
        <CarouselAuction id={"all"} />
      </AuctionBox>
      <SaleBox>
        <CarouselSale type="0" />
      </SaleBox>
      <SaleBox>
        <CarouselSale type="1" />
      </SaleBox>
      <Footer />
    </>
  );
};
