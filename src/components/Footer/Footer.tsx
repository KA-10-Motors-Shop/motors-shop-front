import LogoFooter from "../../assets/Logo-footer.svg";
import { FooterStyled } from "./styles";
import { CgCopyright } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
	return (
		<FooterStyled>
			<img src={LogoFooter} alt="Logo do Motors Shop" />
			<p>
				<CgCopyright /> 2022 - Todos os diretos reservados.
			</p>
			<button>
				<IoIosArrowUp />
			</button>
		</FooterStyled>
	);
};
