import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

interface NavbarProps {
  username: string;
}

interface NavbarLinkObjects {
  name: string;
  onClick: () => void;
}

export interface NavbarChildrenProps {
  breadcrumbs: NavbarLinkObjects[];
  popUpMenu: NavbarLinkObjects[];
  username: string;
  isLogged: boolean;
  handleLogin: () => void;
}

export const Navbar = ({ username }: NavbarProps) => {
  const [isLogged, setIsLogged] = useState(true);

  const handleLogin = () => setIsLogged(!isLogged);

  const breadcrumbs = [
    { name: "Carros", onClick: () => alert("Redirect to /carros") },
    { name: "Motos", onClick: () => alert("Redirect to /motos") },
    { name: "Leilao", onClick: () => alert("Redirect to /leilao") },
  ];

  const popUpMenu = [
    { name: "Editar Perfil", onClick: () => alert("Modal?") },
    { name: "Editar Endereço", onClick: () => alert("Modal?") },
    { name: "Minhas Compras", onClick: () => alert("Modal?") },
    { name: "Sair", onClick: () => setIsLogged(!isLogged) },
  ];

  const selectNavbarBasedOnScreenSize = useBreakpointValue({
    base: (
      <MobileNavbar
        mobileProps={{
          breadcrumbs,
          popUpMenu,
          handleLogin,
          isLogged,
          username,
        }}
      />
    ),
    lg: (
      <DesktopNavbar
        desktopProps={{
          breadcrumbs,
          popUpMenu,
          handleLogin,
          isLogged,
          username,
        }}
      />
    ),
  });

  return (
    <Flex
      h="80px"
      w="100%"
      bg="white"
      position="fixed"
      top="0"
      zIndex="2"
      px={{ base: "16px", lg: "60px" }}
      alignItems="center"
      justifyContent="space-between"
      borderBottom="2px solid"
      borderColor="greyScale.grey6"
    >
      <Image src={Logo} alt="Motors Shop" h="26px" />
      {selectNavbarBasedOnScreenSize}
    </Flex>
  );
};
