import { Container } from "./styles";

interface inputInterface {
  label?: string;
  placeholder?: string;
  error?: any;
  register?: any;
  type?: string;
  id?: string;
  value?: string;
  name?: string;
}

export const Input = ({
  label,
  error,
  placeholder,
  register,
  ...rest
}: inputInterface) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error.message}</span>}
      </div>
      <input placeholder={placeholder} {...(register && register)} {...rest} />
    </Container>
  );
};
