import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  InputProps as ChakraInputProps,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label?: string;
}

interface TextareaProps extends ChakraTextareaProps {
  label?: string;
}

const props = {
  fontSize: "sm",
  color: "greyScale.grey3",
  border: "2px solid",
  borderColor: "greyScale.grey8",
  borderRadius: "4px",
  px: "16px",
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

export const Input = ({ label, type, ...rest }: InputProps) => (
  <FormControl px="20px">
    <FormLabel fontSize="xs" fontWeight="500">
      {label}
    </FormLabel>
    <ChakraInput {...props} {...rest} />
  </FormControl>
);

export const Textarea = ({ label, ...rest }: TextareaProps) => (
  <FormControl>
    <FormLabel fontSize="xs" fontWeight="500">
      {label}
    </FormLabel>
    <ChakraTextarea {...props} {...rest} />
  </FormControl>
);
