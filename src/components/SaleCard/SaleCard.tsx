import { Container } from "./styles";

interface SaleCardInterface {
	id: number;
	img: string;
	title: string;
	description: string;
	km: string;
	year: string;
	price: string;
	username: string;
}

export const SaleCard = ({
	id,
	img,
	title,
	description,
	km,
	year,
	price,
	username,
}: SaleCardInterface) => {
	return (
		<Container>
			<div className="box">
				<div className="box-img">
					<img src={img} alt="imagem da venda" />
				</div>
				<h6>{title}</h6>
				<p>{description}</p>
				<section className="card-data__user">
					<p>R</p>
					<span>{username}</span>
				</section>
				<section className="card-data__vehicle">
					<p>{km} KM</p>
					<p>{year}</p>
					<h6>R$ {price}</h6>
				</section>
			</div>
		</Container>
	);
};
