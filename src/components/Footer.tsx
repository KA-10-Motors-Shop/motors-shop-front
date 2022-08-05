import { ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo-footer.svg";

export const Footer = () => (
  <Flex
    h={{ base: "310px", lg: "140px" }}
    mt={{ base: "45px", lg: "73px" }}
    flexDir={{ base: "column", lg: "row" }}
    p={{ base: "45px 55px", lg: "0 59px" }}
    bg="greyScale.grey0"
    alignItems="center"
    justifyContent="space-between"
    color="greyScale.grey10"
  >
    <Image src={Logo} alt="Motors Shop" h="26px" />
    <Text fontSize={{ base: "14px", lg: "16px" }}>
      © 2022 - Todos os direitos reservados.
    </Text>
    <IconButton
      aria-label="Scroll up"
      bg="greyScale.grey1"
      h="50px"
      w="53px"
      _hover={{ bg: "greyScale.grey2" }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <ChevronUpIcon />
    </IconButton>
  </Flex>
);
