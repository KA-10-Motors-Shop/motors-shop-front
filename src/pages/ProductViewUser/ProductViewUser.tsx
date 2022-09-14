import { Header } from "../../components/Header/Header";
import { ContainerMenu } from "./styles";

export const ProductViewUser = () => {
	return (
		<>
			<Header />
			<ContainerMenu className="header-desktop__menu">
				<ul className="header-mobile__list">
					<li>
						<a href="#">Editar Perfil</a>
					</li>
					<li>
						<a href="#">Editar Endereço</a>
					</li>
					<li>
						<a href="#">Minhas Compras</a>
					</li>
					<li>
						<a href="#">Sair</a>
					</li>
				</ul>
			</ContainerMenu>
		</>
	);
};
