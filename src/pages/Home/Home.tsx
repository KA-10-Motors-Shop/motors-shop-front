import { AuctionCard } from "../../components/AuctionCard/AuctionCard";
import { OutlineLightButton } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { AuctionBox, Container, SaleBox } from "./styles";
import { databaseAuction, databaseCar, databaseMoto } from "../../database";
import { SaleCard } from "../../components/SaleCard/SaleCard";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
	return (
		<>
			<Header />
			<Container>
				<section className="main-coverPage">
					<h3>
						Velocidade e experiência em um lugar feito para você
					</h3>
					<p>Um ambiente feito para você explorar o seu melhor</p>
					<OutlineLightButton>Leilão</OutlineLightButton>
					<OutlineLightButton>Carros</OutlineLightButton>
					<OutlineLightButton>Motos</OutlineLightButton>
				</section>
			</Container>
			<AuctionBox>
				<h5>Leilão</h5>
				<ul>
					{databaseAuction.map(
						(
							{
								id,
								img,
								title,
								description,
								km,
								year,
								price,
								username,
							},
							index,
						) => (
							<AuctionCard
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
						),
					)}
				</ul>
			</AuctionBox>
			<SaleBox>
				<h5>Carros</h5>
				<ul>
					{databaseCar.map(
						(
							{
								id,
								img,
								title,
								description,
								km,
								year,
								price,
								username,
							},
							index,
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
						),
					)}
				</ul>
			</SaleBox>
			<SaleBox>
				<h5>Motos</h5>
				<ul>
					{databaseMoto.map(
						(
							{
								id,
								img,
								title,
								description,
								km,
								year,
								price,
								username,
							},
							index,
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
						),
					)}
				</ul>
			</SaleBox>
			<Footer />
		</>
	);
};
