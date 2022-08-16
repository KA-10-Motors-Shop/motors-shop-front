import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BrandButton, DetailTagButton } from "./Button";
import { SellerInfoCard } from "./SellerInfoCard";

export interface ProductInfoCardProps {
  img: string;
  carTitle: string;
  year: string;
  km: string;
  price: string;
  description: string;
  sellerName: string;
  sellerDescription: string;
}

export const ProductInfoCard = ({
  carTitle,
  description,
  img,
  km,
  price,
  sellerDescription,
  sellerName,
  year,
}: ProductInfoCardProps) => {
  return (
    <Flex
      className="first-group"
      flexDir={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <Box
        className="first-group__main-content"
        w={{ base: "100%", xl: "752px" }}
        mr={{ lg: "46px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="white"
          borderRadius="4px"
          p="35px 32px 67px 25px"
          mb="17px"
        >
          <Image src={img} alt="Car" />
        </Flex>
        <Box bg="white" borderRadius="4px" p="44px 20px 28px 28px" mb="24px">
          <Heading fontSize="md" lineHeight="25px" mb="41px">
            {carTitle}
          </Heading>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            alignItems={{ base: "center" }}
            justifyContent={{ base: "space-between" }}
            w={{ base: "115px", lg: "100%" }}
            h={{ base: "90px", lg: "fit-content" }}
          >
            <Flex>
              <DetailTagButton size="sm" mr="12px">
                {year}
              </DetailTagButton>
              <DetailTagButton size="sm">{`${km} KM`}</DetailTagButton>
            </Flex>
            <Heading as="span" fontSize="sm">{`R$ ${price}`}</Heading>
          </Flex>
          <BrandButton size="lg" h="38px" mt="24px">
            Comprar
          </BrandButton>
        </Box>
        <Box bg="white" borderRadius="4px" p="36px 28px" mb="16px">
          <Heading fontSize="md" mb="32px">
            Descrição
          </Heading>
          <Text lineHeight="28px" color="greyScale.grey2">
            {description}
          </Text>
        </Box>
      </Box>
      <Box w={{ base: "100%", lg: "440px" }}>
        <Flex
          flexDir="column"
          bg="white"
          borderRadius="4px"
          p={{ base: "36px 22px 0", lg: "36px 44px" }}
          mb={{ base: "52px", lg: "34px" }}
        >
          <Heading fontSize="md" mb="32px" mr="auto">
            Fotos
          </Heading>
          <Flex
            flexWrap="wrap"
            flexDir={{ base: "row", lg: "column" }}
            justifyContent={{
              base: "flex-start",
              lg: "space-between",
            }}
            alignItems="flex-start"
            w={{ lg: "352px" }}
            h={{ base: "fit-content", lg: "248px" }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Flex
                key={item}
                mr={{ base: "4px", lg: "0" }}
                mb={{ base: "36px", lg: "0" }}
                w={{ base: "80px", sm: "108px" }}
                h={{ base: "80px", sm: "108px" }}
                alignItems="center"
                justifyContent="center"
                bg="greyScale.grey7"
              >
                <Image src={img} alt="car" />
              </Flex>
            ))}
          </Flex>
        </Flex>
        <SellerInfoCard
          sellerName={sellerName}
          sellerDescription={sellerDescription}
        />
      </Box>
    </Flex>
  );
};
