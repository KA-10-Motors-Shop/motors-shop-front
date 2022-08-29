import { Avatar, Flex, Text, FlexProps } from "@chakra-ui/react";

interface UserMiniCardProps extends FlexProps {
  username: string;
  color?: string;
  size?: any;
  fontdSize?: string;
  text?: boolean;
}

export const UserMiniCard = ({
  username,
  color,
  onClick,
  size = "32px",
  fontSize = "14px",
  text = true,
}: UserMiniCardProps) => {
  const profilePicColor = Math.floor((username.length % 12) + 1);
  const formattedName = username
    .split(" ")
    .filter((element, index, array) => {
      if (index === 0 || array.length - 1 === index) {
        return element;
      }
    })
    .join(" ");

  return (
    <Flex
      h={size}
      w="fit-content"
      pr="4px"
      borderRadius="4px"
      alignItems="center"
      gap="8px"
      _hover={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Avatar
        alignItems="center"
        w={size}
        h={size}
        bg={`profile.random${profilePicColor}`}
        size="14px"
        name={formattedName}
        color="white"
        fontSize={fontSize}
      />
      {text && (
        <Text fontSize="xs" color={color || "greyScale.grey2"}>
          {formattedName}
        </Text>
      )}
    </Flex>
  );
};
