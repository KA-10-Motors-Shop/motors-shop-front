import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import {
  BrandButton,
  BrandOpacityButton,
  OutlineBrandButton,
  OutlineLightButton,
} from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import { UseTokenProvider } from "../../providers/token";
import api from "../../services/api";
import { Container, LoginBox, MainSection } from "./styles";

export const Login = () => {
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
    <Container>
      <Header />
      <MainSection>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LoginBox>
            <h1>Login</h1>
            <Input
              type="email"
              label="Usuário"
              placeholder="Digitar usuário"
              register={{
                ...register("email", { required: "Campo obrigatório!" }),
              }}
            />
            <Input
              type="password"
              label="Senha"
              placeholder="Digitar senha"
              register={{
                ...register("password", { required: "Campo obrigatório!" }),
              }}
            />
            <a href="/">Esqueci minha senha</a>
            <BrandButton width="100%" type="submit">
              Entrar
            </BrandButton>
            <a href="/">Ainda não possui conta?</a>
            <OutlineLightButton>Cadastrar</OutlineLightButton>
          </LoginBox>
        </form>
      </MainSection>
    </Container>
  );
};
