import { Avatar, Flex, Text, FlexProps } from "@chakra-ui/react";
import { DefaultButton } from "./Button";

interface SellerInfoCardProps extends FlexProps {
  sellerName: string;
  sellerDescription: string;
}

export const SellerInfoCard = ({
  sellerName,
  sellerDescription,
}: SellerInfoCardProps) => {
  const profilePicColor = Math.floor((sellerName.length % 12) + 1);
  const formattedName = sellerName
    .split(" ")
    .filter((element, index, array) => {
      if (index === 0 || array.length - 1 === index) {
        return element;
      }
    })
    .join(" ");

  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        bg="white"
        borderRadius="4px"
        p="40px 28px"
        mb={{ base: "52px", lg: "34px" }}
      >
        <Flex
          flexDir="column"
          justifyContent="space-between"
          w="fit-content"
          h="155px"
          pr="4px"
          borderRadius="4px"
          alignItems="center"
          gap="8px"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Avatar
            w="77px"
            h="77px"
            bg={`profile.random${profilePicColor}`}
            size="xl"
            name={formattedName}
            color="white"
          />
          <Text fontSize="xl" color="greyScale.grey2">
            {formattedName}
          </Text>
        </Flex>
        <Text lineHeight="28px" color="greyScale.grey2" my="28px">
          {sellerDescription}
        </Text>
        <DefaultButton size="lg" w="206px">
          Ver todos anuncios
        </DefaultButton>
      </Flex>
    </>
  );
};
