import { Box, Flex, Link, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { BrandButton, OutlineLightButton } from "../components/Button";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { UseTokenProvider } from "../providers/token";

export const Login = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const { setToken, token }: any = UseTokenProvider();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const history = useHistory();

  const onSubmit = (data: any) => {
    console.log(data);
    api
      .post("/users/login", data)
      .then((response) => {
        window.localStorage.setItem("@motors-shop:token", response.data.token);
        setToken(response.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  });

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
        paddingBottom="50px"
        w={isLargerThan700 ? "470px" : "90%"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack m={isLargerThan700 ? "0 48px" : "0 20px"}>
            <Text fontWeight="bold" fontSize="24px" m="48px 0 32px 0">
              Login
            </Text>
            <Input
              label="E-mail"
              type="email"
              placeholder="Digite seu nome de e-mail"
              errorMsg={errors.email}
              register={{
                ...register("email", { required: "Campo obrigatório!" }),
              }}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              errorMsg={errors.password}
              register={{
                ...register("password", { required: "Campo obrigatório!" }),
              }}
            />
            <Link textAlign="right">Esqueci minha senha</Link>
            <BrandButton type="submit" isLoading={isSubmitting}>
              Entrar
            </BrandButton>
            <Text textAlign="center" padding="20px 0">
              Ainda não possui conta?
            </Text>
            <OutlineLightButton>Cadastrar</OutlineLightButton>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};
