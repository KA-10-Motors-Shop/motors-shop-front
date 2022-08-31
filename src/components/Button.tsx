import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useRadio,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  children: string;
  size?: "lg" | "sm";
}

export const DefaultButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="greyScale.grey0"
      color="white"
      _hover={{ bg: "greyScale.grey1", _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const NegativeButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="greyScale.grey6"
      color="greyScale.grey2"
      _hover={{ bg: "greyScale.grey5" }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const BrandButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="brand.brand1"
      color="white"
      _hover={{
        bg: "brand.brand2",
        color: "white",
        _disabled: {
          bg: "brand.brand3",
          cursor: "not-allowed",
        },
      }}
      _disabled={{
        bg: "brand.brand3",
        color: "brand.brand4",
        borderColor: "brand.brand3",
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const BrandButtonDisable = (props: any, ...rest: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box width={props.width}>
      <input {...input} />
      <ChakraButton
        {...checkbox}
        variant="outline"
        bg="transparent"
        color="greyScale.grey0"
        borderColor="greyScale.grey4"
        _hover={{
          bg: "brand.brand2",
          color: "white",
          borderColor: "brand.brand2",

          _disabled: {
            bg: "brand.brand3",
            cursor: "not-allowed",
          },
        }}
        _focus={{
          bg: "brand.brand2",
          color: "white",
          borderColor: "brand.brand2",
        }}
        {...props}
      >
        {props.children}
      </ChakraButton>
    </Box>
  );
};

export const BrandOpacityButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="brand.brand4"
      color="brand.brand1"
      _hover={{ _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const LightButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="greyScale.grey10"
      color="greyScale.grey1"
      _hover={{ _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const OutlineLightButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      variant="outline"
      bg="transparent"
      color="greyScale.grey0"
      borderColor="greyScale.grey4"
      _hover={{
        bg: "brand.brand4",
        borderColor: "brand.brand4",
        color: "black",
        _disabled: { bg: "greyScale.grey5", borderColor: "greyScale.grey5" },
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const Outline1Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      variant="outline"
      color="greyScale.grey0"
      borderColor="greyScale.grey0"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const Outline2Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      variant="outline"
      color="greyScale.grey0"
      borderColor="greyScale.grey4"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const OutlineBrandButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      variant="outline"
      color="brand.brand1"
      borderColor="brand.brand1"
      _hover={{ bg: "brand.brand4", _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const LinkButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      h="fit-content"
      variant="outline"
      border="transparent"
      bg="transparent"
      color="greyScale.grey0"
      _hover={{ bg: "greyScale.grey8", textDecoration: "underline" }}
      _disabled={{
        bg: "transparent",
        opacity: 0.8,
        cursor: "not-allowed",
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const AlertButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="feedback.alert3"
      color="feedback.alert1"
      borderColor="feedback.alert3"
      _hover={{ _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const SuccessButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      bg="feedback.success3"
      color="feedback.success1"
      borderColor="feedback.success3"
      _hover={{ _disabled: { bg: "greyScale.grey5" } }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export const DetailTagButton = ({ children, ...rest }: ButtonProps) => (
  <ChakraButton
    bg="brand.brand4"
    color="brand.brand1"
    p="4px 8px"
    fontWeight="500"
    fontSize="xs"
    _hover={{ bg: "brand.brand4", _disabled: { bg: "greyScale.grey5" } }}
    {...rest}
  >
    {children}
  </ChakraButton>
);
