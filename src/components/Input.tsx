import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  FormErrorMessage,
} from "@chakra-ui/react";

interface InputProps {
  type: "input" | "textarea" | "password" | "email";
  label: string;
  placeholder: string;
  errorMsg?: any;
  register?: any;
}

export const Input = ({
  label,
  type,
  placeholder,
  errorMsg,
  register,
  ...rest
}: InputProps) => {
  const props = {
    fontSize: "sm",
    placeholder: placeholder,
    color: "greyScale.grey3",
    border: "2px solid",
    type: type,
    borderColor: "greyScale.grey8",
    borderRadius: "4px",
    px: "16px",
    marginBottom: "10px",
    _hover: {
      bg: "greyScale.grey8",
    },
    _focus: {
      bg: "greyScale.grey9",
      borderColor: "#5126EA",
      color: "greyScale.grey1",
      boxShadow: "none",
    },
  };

  return (
    <FormControl isInvalid={errorMsg}>
      <FormLabel fontSize="xs" fontWeight="500">
        {label}
      </FormLabel>
      {type === "textarea" ? (
        <ChakraTextarea {...(register && register)} {...props} {...rest} />
      ) : (
        <ChakraInput {...(register && register)} {...props} {...rest} />
      )}
      <FormErrorMessage>{errorMsg && errorMsg.message}</FormErrorMessage>
    </FormControl>
  );
};
