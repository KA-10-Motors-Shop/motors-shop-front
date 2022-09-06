import styled from "styled-components";

export const DefaultButtonStyled = styled.button`
  background-color: var(--grey0);
  color: var(--whiteFixed);
  border: 1.5px solid var(--grey0);
  border-radius: 4px;
  width: 9.125em;
  height: 3em;
  font-size: 1rem;
  font-weight: 600;
  font-style: normal;

  :hover {
    background-color: var(--grey1);
    border: 1.5px solid var(--grey1);
  }

  :disabled {
    background-color: var(--grey5);
    border-color: var(--grey5);
    color: var(--whiteFixed);
    cursor: not-allowed;
  }
`;

export const BrandButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--brand1);
  color: var(--whiteFixed);
  border: 1.5px solid var(--brand1);

  :hover {
    background-color: var(--brand2);
    border-color: var(--brand2);
  }

  :disabled {
    background-color: var(--brand3);
    color: var(--brand4);
    border-color: var(--brand3);
    cursor: not-allowed;
  }
`;

export const BrandOpacityButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--brand4);
  color: var(--brand1);
  border: 1.5px solid var(--brand4);
`;

export const OutlineBrand1ButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--brand1);
  border: 1.5px solid var(--brand1);

  :hover {
    background-color: var(--brand4);
  }
`;

export const OutlineLightButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--grey0);
  border: 1.5px solid var(--grey4);

  :hover {
    background-color: var(--brand4);
    border-color: var(--brand4);
    color: var(--grey0);
  }
`;

export const Outline1ButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--grey0);
  border: 1.5px solid var(--grey0);

  :hover {
    background-color: var(--grey1);
    border-color: var(--grey1);
    color: var(--grey10);
  }
`;

export const Outline2ButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--grey0);
  border: 1.5px solid var(--grey4);

  :hover {
    background-color: var(--grey1);
    border-color: var(--grey1);
    color: var(--grey10);
  }
`;

export const OutlineBrandButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--brand1);
  border: 1.5px solid var(--brand1);

  :hover {
    background-color: var(--brand4);
  }
`;

export const SuccessButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--success3);
  color: var(--success1);
  border: 1.5px solid var(--success3);

  :hover {
    background-color: var(--success2);
    border: 1.5px solid var(--success2);
  }
`;

export const AlertButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--alert3);
  color: var(--alert1);
  border: 1.5px solid var(--alert3);

  :hover {
    background-color: var(--alert2);
    border: 1.5px solid var(--alert2);
  }
`;

export const LinkButtonStyled = styled(DefaultButtonStyled)`
  background-color: transparent;
  color: var(--grey0);
  border: transparent;

  :hover {
    background-color: var(--grey8);
    border: 1.5px solid var(--alert2);
  }

  :disabled {
    background-color: transparent;
    border: transparent;
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const LightButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--grey10);
  color: var(--grey1);
  border: 1.5px solid var(--grey10);

  :disabled {
    color: var(--grey1);
  }
  :hover {
    color: white;
  }
`;

export const NegativeButtonStyled = styled(DefaultButtonStyled)`
  background-color: var(--grey6);
  color: var(--grey2);
  border: 1.5px solid var(--grey6);

  :hover {
    background-color: var(--grey5);
    border-color: 1.5px solid var(--grey5);
  }

  :disabled {
    color: var(--grey2);
  }
`;
