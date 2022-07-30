import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { LinkButton, Outline2Button } from "./Button";
import { UserMiniCard } from "./UserMiniCard";

interface NavbarProps {
  username: string;
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

      {/* Desktop Navbar */}
      <Box display={{ base: "none", lg: "flex" }}>
        <Flex
          h="80px"
          mr="22px"
          pr="22px"
          borderRight="2px solid"
          borderColor="greyScale.grey6"
          alignItems="center"
        >
          {breadcrumbs.map(({ name, onClick }, idx) => (
            <LinkButton
              key={idx}
              size="lg"
              fontWeight="500"
              px="22px"
              onClick={onClick}
            >
              {name}
            </LinkButton>
          ))}
        </Flex>
        <Flex alignItems="center">
          {isLogged ? (
            <Menu>
              <MenuButton as={Flex}>
                <UserMiniCard username={username} onClick={handleLogin} />
              </MenuButton>
              <MenuList boxShadow="0px 4px 40px -10px rgba(0, 0, 0, 0.25)">
                {popUpMenu.map(({ name, onClick }, idx) => (
                  <MenuItem
                    key={idx}
                    color="greyScale.grey2"
                    borderBottom="2px solid"
                    borderColor="white"
                    _hover={{
                      bg: "white",
                      borderColor: "greyScale.grey6",
                    }}
                    onClick={onClick}
                  >
                    {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <>
              <LinkButton
                size="lg"
                fontWeight="500"
                px="22px"
                mr="44px"
                onClick={handleLogin}
              >
                Fazer Login
              </LinkButton>
              <Outline2Button size="lg" onClick={() => alert("Redirect")}>
                Cadastrar
              </Outline2Button>
            </>
          )}
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box display={{ base: "flex", lg: "none" }}>
        <Menu offset={[60, 20]} autoSelect={false} closeOnSelect={false}>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                bg="white"
                color="greyScale.grey2"
                _active={{
                  bg: "white",
                }}
              >
                {isOpen ? (
                  <CloseIcon fontSize="12px" />
                ) : (
                  <HamburgerIcon fontSize="19px" />
                )}
              </MenuButton>
              <MenuList
                w={{ base: "100vw", sm: "280px", md: "374px" }}
                boxShadow="0px 10px 40px -10px rgba(0, 0, 0, 0.25)"
                borderRadius="0 0 4px 4px"
                bg="white"
                py="10px"
              >
                <MenuGroup>
                  {breadcrumbs.map(({ name, onClick }, idx) => (
                    <MenuItem key={idx} p="22px 16px" onClick={onClick}>
                      {name}
                    </MenuItem>
                  ))}
                </MenuGroup>
                <Box
                  my="10px"
                  borderTop="1px solid"
                  borderColor="greyScale.grey4"
                />
                <MenuGroup>
                  {isLogged ? (
                    <Menu
                      offset={[60, 8]}
                      autoSelect={false}
                      closeOnSelect={false}
                    >
                      <MenuButton as={Flex} p="22px 12px">
                        <UserMiniCard
                          username={username}
                          onClick={handleLogin}
                        />
                      </MenuButton>
                      <MenuList
                        boxShadow="0px 10px 40px -10px rgba(0, 0, 0, 0.25)"
                        bg="white"
                        w={{ base: "100vw", sm: "280px", md: "374px" }}
                        borderRadius="0 0 4px 4px"
                        borderTop="1px solid"
                        borderColor="greyScale.grey4"
                      >
                        {popUpMenu.map(({ name, onClick }, idx) => (
                          <MenuItem
                            key={idx}
                            p="16px"
                            color="greyScale.grey2"
                            borderBottom="2px solid"
                            borderColor="white"
                            _hover={{
                              bg: "white",
                              borderColor: "greyScale.grey6",
                            }}
                            onClick={onClick}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <>
                      <MenuItem p="0">
                        <LinkButton
                          p="22px 12px"
                          size="lg"
                          w="100%"
                          fontWeight="500"
                          justifyContent="flex-start"
                          onClick={handleLogin}
                        >
                          Fazer Login
                        </LinkButton>
                      </MenuItem>
                      <MenuItem
                        p="22px 29px 22px 12px"
                        _hover={{ bg: "white" }}
                      >
                        <Outline2Button
                          size="lg"
                          w="100%"
                          onClick={() => alert("Redirect")}
                        >
                          Cadastrar
                        </Outline2Button>
                      </MenuItem>
                    </>
                  )}
                </MenuGroup>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};
