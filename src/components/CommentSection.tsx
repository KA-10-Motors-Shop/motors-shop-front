import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { BrandButton } from "./Button";
import { Textarea } from "./Input";
import { UserMiniCard } from "./UserMiniCard";

export interface CommentSectionProps {
  comments: {
    user: string;
    text: string;
    date: string;
  }[];
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const tags = ["Gostei muito!", "Incrível!", "Recomendarei para meus amigos!"];

  return (
    <Flex
      className="comment-section"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="start"
      w={{ xl: "1238px" }}
      m="auto"
    >
      <Flex
        flexDir="column"
        alignItems="flex-start"
        justifyContent="center"
        bg="white"
        borderRadius="4px"
        p="36px 40px 36px 28px"
        mb={{ base: "52px", lg: "34px" }}
        w={{ base: "100%", lg: "calc(100% - 486px)", xl: "752px" }}
      >
        <Heading fontSize="md" mb="32px">
          Comentários
        </Heading>
        {comments.map(({ user, text, date }, idx) => (
          <Box key={idx}>
            <Flex alignItems="center">
              <UserMiniCard username={user} />
              <Box
                borderRadius="50%"
                bg="greyScale.grey4"
                w="4px"
                h="4px"
                ml="8px"
                mr="13px"
              ></Box>
              <Text fontSize="xs" color="greyScale.grey3">
                {date}
              </Text>
            </Flex>
            <Text lineHeight="28px" color="greyScale.grey2" m="28px 0 44px">
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        bg="white"
        borderRadius="4px"
        p="36px 40px 36px 28px"
        mb={{ base: "52px", lg: "34px" }}
        mr={{ lg: "486px" }}
        w={{ base: "100%", lg: "calc(100% - 486px)", xl: "752px" }}
      >
        <UserMiniCard username="Context State" />
        <Textarea my="24px" />
        <BrandButton size="lg" w="108px" h="38px">
          Comentar
        </BrandButton>
        <Flex flexWrap="wrap">
          {tags.map((tag, idx) => (
            <Button
              key={idx}
              h="24px"
              bg="greyScale.grey7"
              px="12px"
              mt="24px"
              mr="8px"
              borderRadius="24px"
              color="greyScale.grey3"
              fontWeight="500"
              fontSize="xs"
              lineHeight="24px"
              textOverflow="ellipsis"
              noOfLines={1}
            >
              {tag}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
