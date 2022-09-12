import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.svg";
import {
  LightButton,
  Outline2Button,
  OutlineLightButton,
} from "../Button/Button";
import { NavLinks, HeaderStyled, DivLoginButton } from "./styles";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { UseTokenProvider } from "../../providers/token";
import Avatar from "../Avatar";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";

export const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleLogin = () => setIsLogged(!isLogged);

  const { token }: any = UseTokenProvider();
  const { name }: any = jwt_decode(token);

  const popUpMenu = [
    "Editar Perfil",
    "Editar Endereço",
    "Minhas compras",
    "Sair",
  ];

  window.onresize = window.onload = () => {
    setScreenWidth(window.innerWidth);
  };

  const history = useHistory();

  return (
    <HeaderStyled>
      <nav className="header-menu">
        <section className="header-toggle">
          <img
            src={Logo}
            alt="Logo da Motors Shop"
            onClick={() => history.push("/")}
          />
          {screenWidth > 900 ? (
            <NavLinks token={token}>
              <nav>
                <a href="#cars">Carros</a>
                <a href="#cars">Motos</a>
                <a href="#cars">Leilão</a>
              </nav>

              <DivLoginButton>
                {token ? (
                  <Avatar name={name} size="32px" bigAvatar={false}></Avatar>
                ) : (
                  <>
                    <LightButton onClick={() => history.push("/login")}>
                      Login
                    </LightButton>
                    <OutlineLightButton>Cadastrar</OutlineLightButton>
                  </>
                )}
              </DivLoginButton>
            </NavLinks>
          ) : menuIsVisible ? (
            <div
              className="header-menu__toggle header-menu--close"
              onClick={() => setMenuIsVisible(false)}
            >
              <IoMdClose size={24} />
            </div>
          ) : (
            <div className="header-menu__toggle header-menu--open">
              <HiOutlineMenu size={24} onClick={() => setMenuIsVisible(true)} />
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
                <button className="header-bottom__login">Fazer Login</button>
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
