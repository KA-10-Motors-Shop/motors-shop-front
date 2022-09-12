import { OutlineLightButton } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { AuctionBox, Container, SaleBox } from "./styles";
import { databaseCar, databaseMoto } from "../../database";
import { SaleCard } from "../../components/SaleCard/SaleCard";
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
        <h5>Carros</h5>
        <CarouselSale type="0" />
      </SaleBox>
      {/* <SaleBox>
        <h5>Motos</h5>
        <ul>
          {databaseMoto.map(
            (
              { id, img, title, description, km, year, price, username },
              index
            ) => (
              <SaleCard
                key={index}
                id={id}
                img={img}
                title={title}
                description={description}
                km={km}
                year={year}
                price={price}
                username={username}
              />
            )
          )}
        </ul>
      </SaleBox> */}
      <Footer />
    </>
  );
};
