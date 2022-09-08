import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--grey7);
`;

export const LoginBox = styled.div`
  width: 412px;
  height: 542px;
  border-radius: 3px;
  display: flex;
  padding: 44px 48px;
  background-color: white;
  flex-flow: column;

  form {
  }

  h1 {
    font-size: 24px;
    margin-bottom: 32px;
    margin-top: 40px;
  }

  a {
    color: black;
    text-align: right;
    margin: 10px 0;

    &:hover {
      text-decoration: underline;
    }
    &:nth-child(6) {
      text-align: center;
      margin: 24px 0;
    }
  }

  button {
    margin: 10px 0;
  }
`;
