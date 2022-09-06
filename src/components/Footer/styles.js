import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 19.4rem;
  background-color: var(--grey0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 9.56em;
    height: 1.65em;
  }

  p {
    margin-top: 3.75em;
    margin-bottom: 3.75em;
    font-size: 0.875em;
    line-height: 1.5em;
    color: var(--whiteFixed);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 3.3125em;
    height: 3.125em;
    border-radius: 4px;
    background-color: var(--grey1);
    border: 0;

    svg {
      color: var(--whiteFixed);
      size: 1rem;
    }
  }

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.68rem;
    padding-right: 3.68rem;
  }
`;
