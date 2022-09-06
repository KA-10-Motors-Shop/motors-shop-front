import { Container } from "./styles";
import { BrandButton } from "../Button/Button";
import { FiClock } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

interface AuctionCardInterface {
	id: number;
	img: string;
	title: string;
	description: string;
	km: string;
	year: string;
	price: string;
	username: string;
}

export const AuctionCard = ({
	id,
	img,
	title,
	description,
	km,
	year,
	price,
	username,
}: AuctionCardInterface) => {
	return (
		<Container>
			<div>
				<section className="card-data__timer">
					<FiClock size={24} />
					<h6>01:58:00</h6>
				</section>
				<h6>{title}</h6>
				<p>{description}</p>
				<section className="card-data__user">
					<p>R</p>
					<span>{username}</span>
				</section>
				<section className="card-data__vehicle">
					<div>
						<p>{year}</p>
						<p>{km} KM</p>
					</div>
					<h6>R$ {price}</h6>
				</section>
			</div>
			<BrandButton>Acessar página do leilão </BrandButton>
		</Container>
	);
};
