import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { BrandButton } from "../components/Button";

export const Login = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      backgroundColor="#F1F3F5"
    >
      <Navbar username="Ana" />
      <Box
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor="white"
        h="542px"
        w="412px"
      >
        <Stack m="0 48px">
          <Text>Login</Text>
          <Input
            label="Usuário"
            type="input"
            placeholder="Digite seu nome de usuário"
          />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />
          <BrandButton>Entrar</BrandButton>
        </Stack>
      </Box>
    </Flex>
  );
};
