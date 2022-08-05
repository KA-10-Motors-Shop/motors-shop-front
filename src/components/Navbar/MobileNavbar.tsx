import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LinkButton, Outline2Button } from "../Button";
import { UserMiniCard } from "../UserMiniCard";
import { NavbarChildrenProps } from ".";

interface MobileNavbarProps {
  mobileProps: NavbarChildrenProps;
}

export const MobileNavbar = ({
  mobileProps: { breadcrumbs, isLogged, username, handleLogin, popUpMenu },
}: MobileNavbarProps) => (
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
          <Box my="10px" borderTop="1px solid" borderColor="greyScale.grey4" />
          <MenuGroup>
            {isLogged ? (
              <>
                <MenuItem p="22px 12px" onClick={() => alert("redirect?")}>
                  <UserMiniCard username={username} />
                </MenuItem>
                {popUpMenu.map(({ name, onClick }, idx) => (
                  <MenuItem
                    key={idx}
                    p="16px"
                    color="greyScale.grey2"
                    onClick={onClick}
                  >
                    {name}
                  </MenuItem>
                ))}
              </>
            ) : (
              <>
                <MenuItem p="0">
                  <LinkButton
                    as="a"
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
                <MenuItem p="22px 29px 22px 12px" _hover={{ bg: "white" }}>
                  <Outline2Button
                    as="a"
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
);
