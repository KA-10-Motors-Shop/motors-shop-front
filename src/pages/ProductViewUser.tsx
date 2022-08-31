import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import UserProfileCard from "../components/UserProfileCard";

export const ProductViewUser = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        w="100vw"
        h="100vh"
        backgroundColor="#F1F3F5"
      >
        <Navbar username="Ana" />
        <Box
          width="100%"
          height="400px"
          backgroundColor="brand.brand1"
          position="fixed"
          top="0px"
        ></Box>
        <UserProfileCard />
      </Flex>
    </>
  );
};
