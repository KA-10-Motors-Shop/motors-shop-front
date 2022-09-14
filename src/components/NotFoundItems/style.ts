import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  display: flex;
  height: 300px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
      width: 100px;
      height: 100px;
    }
    h1 {
      line-height: 1;
      margin: 10px;
      text-align: center;
    }
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
