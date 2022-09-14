import LogoFooter from "../../assets/Logo-footer.svg";
import { FooterStyled } from "./styles";
import { CgCopyright } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterStyled>
      <img src={LogoFooter} alt="Logo do Motors Shop" />
      <p>
        <CgCopyright /> 2022 - Todos os diretos reservados.
      </p>
      <button onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </FooterStyled>
  );
};
