import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LinkButton, Outline2Button } from "../Button";
import { UserMiniCard } from "../UserMiniCard";
import { NavbarChildrenProps } from ".";

interface DesktopNavbarProps {
  desktopProps: NavbarChildrenProps;
}

export const DesktopNavbar = ({
  desktopProps: { breadcrumbs, isLogged, username, handleLogin, popUpMenu },
}: DesktopNavbarProps) => (
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
);
