import { Avatar, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { DetailTagButton } from "./Button";
import { SellerMiniCard } from "./SellerMiniCard";

interface ProductCardProps {
  img: string;
  title: string;
  description: string;
  km: string;
  year: string;
  price: string;
  sellerName: string;
}

export const ProductCard = ({
  img,
  title,
  description,
  km,
  year,
  price,
  sellerName,
}: ProductCardProps) => {
  console.log(`profile.random${Math.floor(sellerName.length % 12)}`);
  return (
    <Flex flexDir="column" gap="16px" w="312px" borderRadius="4px">
      <Flex
        bg="greyScale.grey7"
        border="2px solid"
        borderColor="greyScale.grey7"
        borderRadius="4px 4px 0 0"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        _hover={{
          borderColor: "brand.brand2",
        }}
      >
        <Image
          src={img}
          alt="Car"
          _hover={{
            transform: "scale(1.19)",
            transition: "transform 0.19s ease-in-out",
          }}
        />
      </Flex>
      <Heading as="h6" fontSize="xs" noOfLines={1}>
        {title}
      </Heading>
      <Text fontSize="xs" noOfLines={2}>
        {description}
      </Text>
      <SellerMiniCard sellerName="Samuel Rosa" />
      <Flex alignItems="center">
        <DetailTagButton size="sm" mr="12px">
          {`${km} KM`}
        </DetailTagButton>
        <DetailTagButton size="sm">{year}</DetailTagButton>
        <Heading as="span" fontSize="sm" ml="auto">{`R$ ${price}`}</Heading>
      </Flex>
    </Flex>
  );
};
