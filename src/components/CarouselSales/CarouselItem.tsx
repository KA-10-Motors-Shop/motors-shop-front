import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { DetailTagButton } from "../Button";
import { UserMiniCard } from "../UserMiniCard";

export interface CarouselItemProps {
  title: string;
  description: string;
  username: string;
  year: string;
  km: string;
  price: string;
  img: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
  description,
  km,
  price,
  title,
  username,
  year,
  img,
}) => {
  return (
    <Flex
      flexDir="column"
      flexShrink="0"
      w={{ base: "100%", sm: "328px", lg: "735px" }}
      h={{ base: "496px", lg: "388px" }}
      backgroundImage={img}
      backgroundPosition={{ base: "0 60px", lg: "35% 80%" }}
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: "contain", lg: "80%" }}
      ml="60px"
      mt="60px"
    >
      <Flex
        h={{ base: "435px", lg: "328px" }}
        flexDir="column"
        justifyContent="space-between"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
        p={{ base: "33px 22px", lg: "24px 41px 28px 36px" }}
        borderRadius="4px 4px 0 0"
        _hover={{
          bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%)",
          transition: "all 0.2s ease-in",
        }}
      >        
        <Flex
          flexDir="column"
          justifyContent="space-between"
          h={{ base: "298px", lg: "177px" }}
        >
          <Heading
            as="h6"
            color="greyScale.grey10"
            fontSize="md"
            noOfLines={{ base: 2, lg: 1 }}
          >
            {title}
          </Heading>
          <Text
            color="greyScale.grey5"
            noOfLines={{ base: 3, lg: 1 }}
            lineHeight="28px"
            pr="6px"
          >
            {description}
          </Text>
          <UserMiniCard username={username} color="greyScale.grey10" />
          <Flex
            h={{ base: "72px", lg: "32px" }}
            alignItems={{ base: "left", lg: "center" }}
            flexWrap="wrap"
          >
            <DetailTagButton size="sm" mr="12px">
              {`${km} KM`}
            </DetailTagButton>
            <DetailTagButton
              size="sm"
              mb={{ base: "20px", lg: "0" }}
              mr={{ lg: "auto" }}
            >
              {year}
            </DetailTagButton>
            <Heading
              as="span"
              fontSize="sm"
              color="greyScale.grey10"
              flexBasis={{ base: "100%", lg: "auto" }}
            >{`R$ ${price}`}</Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
