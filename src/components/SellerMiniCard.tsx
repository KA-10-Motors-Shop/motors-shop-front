import { Flex, Text } from "@chakra-ui/react";

interface SellerMiniCardProps {
  sellerName: string;
}

export const SellerMiniCard = ({ sellerName }: SellerMiniCardProps) => {
  const nameArray = sellerName.split(" ");
  const avatar = nameArray[0][0] + nameArray[nameArray.length - 1][0];

  return (
    <Flex
      as="button"
      h="32px"
      w="fit-content"
      pr="4px"
      borderRadius="4px"
      alignItems="center"
      gap="8px"
      _hover={{
        cursor: "pointer",
        bg: "greyScale.grey10",
      }}
    >
      <Text
        w="32px"
        h="32px"
        py="6px"
        textAlign="center"
        borderRadius="50%"
        bg={`profile.random${Math.floor(sellerName.length % 12)}`}
        color="white"
        fontSize="xs"
        fontWeight="600"
      >
        {avatar}
      </Text>
      <Text fontSize="xs" color="greyScale.grey2">
        {sellerName}
      </Text>
    </Flex>
  );
};
