import styled from "styled-components";
import { UseTokenProvider } from "../../providers/token";

export const HeaderStyled = styled.header`
  section.header-toggle {
    position: fixed;
    width: 100vw;
    display: flex;
    height: 80px;
    z-index: 100;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--grey6);
    background-color: var(--whiteFixed);
    padding-left: 1rem;
    padding-right: 1rem;
    z-index: 1;

    img {
      width: 9.56rem;
      height: 1.65rem;
      cursor: pointer;
    }
  }

  div.header-menu__toggle svg {
    color: var(--grey1);
    cursor: pointer;
  }

  section.header-mobile {
    display: flex;
    position: fixed;
    z-index: 100;
    top: 5rem;
    flex-direction: column;
    justify-content: flex-start;
  }

  ul.header-mobile__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: var(--whiteFixed);
    height: 100vh;
    width: 100vw;

    li {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      margin-left: 1rem;
      justify-content: center;
    }

    li:nth-child(3) {
      margin-bottom: 0.75rem;
    }

    a {
      color: var(--grey2);
      transition: color 0.2s;

      :hover {
        color: var(--grey3);
      }
    }
  }

  div.header-div__line {
    width: 100vw;
    border-bottom: 1px solid var(--grey4);
  }

  ul.header-mobile__list--breadcrumbs {
    height: 50vh;
  }

  ul.header-mobile__list--sign {
    height: 38vh;

    button {
      width: 20.81rem;
      padding: 1.75rem 0.75rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
  }
`;

interface INav {
  token?: string;
}

export const NavLinks = styled.nav<INav>`
  width: ${({ token }) => (token ? "500px" : "600px")};
  display: flex;
  align-items: center;

  a {
    margin: 20px;
    color: var(--grey2);
    transition: color 0.2s;

    :hover {
      color: var(--grey3);
    }
  }
`;

export const DivLoginButton = styled.div`
  border-left: 2px solid var(--grey6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 10px;
  height: 80px;
  width: 100%;
`;
