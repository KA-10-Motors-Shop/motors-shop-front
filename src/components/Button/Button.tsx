import { ButtonHTMLAttributes } from "react";
import {
  AlertButtonStyled,
  BrandButtonStyled,
  BrandOpacityButtonStyled,
  LinkButtonStyled,
  OutlineBrandButtonStyled,
  Outline2ButtonStyled,
  OutlineLightButtonStyled,
  SuccessButtonStyled,
  DefaultButtonStyled,
  LightButtonStyled,
  NegativeButtonStyled,
  OutlineBrand1ButtonStyled,
  Outline1ButtonStyled,
} from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  width?: string;
}

export const DefaultButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <DefaultButtonStyled type="button" {...rest}>
      {children}
    </DefaultButtonStyled>
  );
};

export const BrandButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <BrandButtonStyled type="button" {...rest}>
      {children}
    </BrandButtonStyled>
  );
};

export const BrandOpacityButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <BrandOpacityButtonStyled type="button" {...rest}>
      {children}
    </BrandOpacityButtonStyled>
  );
};

export const OutlineBrand1Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <OutlineBrand1ButtonStyled type="button" {...rest}>
      {children}
    </OutlineBrand1ButtonStyled>
  );
};

export const OutlineLightButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <OutlineLightButtonStyled type="button" {...rest}>
      {children}
    </OutlineLightButtonStyled>
  );
};

export const Outline1Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <Outline2ButtonStyled type="button" {...rest}>
      {children}
    </Outline2ButtonStyled>
  );
};

export const Outline2Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <Outline1ButtonStyled type="button" {...rest}>
      {children}
    </Outline1ButtonStyled>
  );
};

export const OutlineBrandButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <OutlineBrandButtonStyled type="button" {...rest}>
      {children}
    </OutlineBrandButtonStyled>
  );
};

export const SuccessButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <SuccessButtonStyled type="button" {...rest}>
      {children}
    </SuccessButtonStyled>
  );
};

export const AlertButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <AlertButtonStyled type="button" {...rest}>
      {children}
    </AlertButtonStyled>
  );
};

export const LinkButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <LinkButtonStyled type="button" {...rest}>
      {children}
    </LinkButtonStyled>
  );
};

export const LightButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <LightButtonStyled type="button" {...rest}>
      {children}
    </LightButtonStyled>
  );
};

export const NegativeButton = ({ children, ...rest }: IButtonProps) => {
  return (
    <NegativeButtonStyled type="button" {...rest}>
      {children}
    </NegativeButtonStyled>
  );
};
