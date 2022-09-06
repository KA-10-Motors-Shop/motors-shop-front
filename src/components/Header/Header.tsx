import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Outline2Button } from "../Button/Button";
import { HeaderStyled } from "./styles";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
	const [isLogged, setIsLogged] = useState(false);
	const [menuIsVisible, setMenuIsVisible] = useState(false);
	const handleLogin = () => setIsLogged(!isLogged);

	const popUpMenu = [
		"Editar Perfil",
		"Editar Endereço",
		"Minhas compras",
		"Sair",
	];

	return (
		<HeaderStyled>
			<nav className="header-menu">
				<section className="header-toggle">
					<img src={Logo} alt="Logo da Motors Shop" />
					{menuIsVisible ? (
						<div
							className="header-menu__toggle header-menu--close"
							onClick={() => setMenuIsVisible(false)}
						>
							<IoMdClose size={24} />
						</div>
					) : (
						<div className="header-menu__toggle header-menu--open">
							<HiOutlineMenu
								size={24}
								onClick={() => setMenuIsVisible(true)}
							/>
						</div>
					)}
				</section>
				{menuIsVisible && (
					<section className="header-mobile">
						<ul className="header-mobile__list header-mobile__list--breadcrumbs">
							<li>
								<a href="#cars">Carros</a>
							</li>
							<li>
								<a href="#motorcycle">Motos</a>
							</li>
							<li>
								<a href="#auction">Leilão</a>
							</li>
						</ul>
						<div className="header-div__line"></div>
						<ul className="header-mobile__list header-mobile__list--sign">
							<li>
								<a className="header-bottom__login">
									Fazer Login
								</a>
							</li>
							<li>
								<Outline2Button>Cadastrar</Outline2Button>
							</li>
						</ul>
					</section>
				)}
			</nav>
		</HeaderStyled>
	);
};
