import styled from "styled-components";

export const DivContainer = styled.div`
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
