import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import UserProfileCard from "../components/UserProfileCard";

export const ProductViewUser = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      backgroundColor="#F1F3F5"
    >
      <Navbar username="Ana" />
      <UserProfileCard />
    </Flex>
  );
};
