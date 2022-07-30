import { Avatar, Flex, Text, FlexProps } from "@chakra-ui/react";

interface UserMiniCardProps extends FlexProps {
  username: string;
}

export const UserMiniCard = ({ username, onClick }: UserMiniCardProps) => {
  const profilePicColor = Math.floor((username.length % 12) + 1);
  const formattedName = username
    .split(" ")
    .filter((element, index, array) => {
      if (index === 0 || array.length - 1 === index) return element;
    })
    .join(" ");

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
        bg: "greyScale.grey9",
      }}
      onClick={onClick}
    >
      <Avatar
        w="32px"
        h="32px"
        bg={`profile.random${profilePicColor}`}
        size="14px"
        name={formattedName}
      />
      <Text fontSize="xs" color="greyScale.grey2">
        {formattedName}
      </Text>
    </Flex>
  );
};
