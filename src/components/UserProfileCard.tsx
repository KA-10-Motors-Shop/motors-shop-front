import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { UseTokenProvider } from "../providers/token";
import { UserMiniCard } from "./UserMiniCard";
import jwt_decode from "jwt-decode";
import { OutlineBrandButton } from "./Button";

const UserProfileCard = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const { token }: any = UseTokenProvider();

  const { name, description, accountType }: any = jwt_decode(token);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor="white"
      // paddingBottom="50px"
      w={isLargerThan700 ? "80%" : "90%"}
    >
      <Box m="44px 41px">
        <UserMiniCard
          username={name}
          size="100px"
          fontSize="36px"
          text={false}
        />
        <Flex alignItems="center">
          <Text m="21px 0" fontSize="20px" fontWeight="bold">
            {name}
          </Text>
          {accountType && (
            <Box
              marginLeft="9px"
              bgColor="brand.brand4"
              p="4px 8px"
              borderRadius="4px"
            >
              <Text fontSize="14px" color="brand.brand1">
                Anunciante
              </Text>
            </Box>
          )}
        </Flex>
        <Text color="#495057" marginBottom="50px">
          {description}
        </Text>
        <OutlineBrandButton>Criar anuncio</OutlineBrandButton>
      </Box>
    </Box>
  );
};

export default UserProfileCard;
