import { AuctionCard } from "../../components/AuctionCard/AuctionCard";
import { OutlineLightButton } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { AuctionBox, Container } from "./styles";
import { databaseAuction } from "../../database";

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
		</>
	);
};
