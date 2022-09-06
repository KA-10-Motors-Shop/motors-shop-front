import styled from "styled-components";

export const Container = styled.main`
  section.main-coverPage {
    display: flex;
    flex-direction: column;
    padding-top: 8.3125rem;
    background-color: var(--brand2);
    align-items: center;
    width: 100%;
    padding-bottom: 5.3125rem;

    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: center;
      margin-bottom: 3.25rem;
      color: var(--grey10);
      width: 23.5rem;
      height: 7.5rem;

      @media (min-width: 750px) {
        width: 35rem;
        margin-bottom: 0.5rem;
      }
    }

    p {
      text-align: center;
      color: var(--grey9);
      margin-bottom: 3.25rem;
      line-height: 1.75rem;
    }

    div {
      display: flex;
      flex-direction: column;

      button {
        width: 21.93rem;
        height: 3rem;
        margin-bottom: 1.25rem;
        color: var(--grey10);
        font-size: 1rem;
        font-weight: 600;
      }

      @media (min-width: 750px) {
        flex-direction: row;

        button {
          width: 7.34rem;
          margin-right: 1.3125rem;
        }
      }
    }
  }
`;

export const AuctionBox = styled.section`
  height: 37.52rem;
  width: 100%;

  h5 {
    margin-top: 6rem;
    margin-bottom: 5.92rem;
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    height: 500px;
    width: 100%;

    li:first-child {
      margin-left: 0.75rem;
    }
  }
`;

export const SaleBox = styled.section`
  height: 32.8125rem;
  width: 100%;

  h5 {
    margin-top: 4.1875rem;
    margin-bottom: 2.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: var(--allBlack);
    margin-left: 1.4375rem;
  }

  ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    height: 26.5rem;

    li:first-child {
      margin-left: 1.4375rem;
    }
  }
`;
