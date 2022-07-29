import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";

interface InputProps {
  type: "input" | "textarea";
  label: string;
  placeholder: string;
}

export const Input = ({ label, type, placeholder, ...rest }: InputProps) => {
  const styling = {
    fontSize: "sm",
    placeholder: placeholder,
    bg: "white",
    color: "greyScale.grey3",
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
    ...rest,
  };

  return (
    <FormControl>
      <FormLabel fontSize="xs" fontWeight="500">
        {label}
      </FormLabel>
      {type === "input" ? (
        <ChakraInput {...styling} />
      ) : (
        <ChakraTextarea {...styling} />
      )}
    </FormControl>
  );
};
