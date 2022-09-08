import styled from "styled-components";

export const SectionMain = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivForm = styled.div`
  width: 50%;
  max-width: 512px;
  max-height: 80%;
  background-color: white;
  padding: 0 24px;
  border-radius: 5px;
  overflow: auto;

  h2 {
    margin: 30px 0 35px 0;
  }

  form {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-flow: column;
    display: flex;

    p {
      margin: 20px 0;
    }
  }

  .moreImages__buttom {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const DivRadios = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  &:nth-child(1) {
    margin: 0;
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
    border: 1.5px solid var(--grey10);
  }
  label {
    display: inline-block;
    color: var(--whiteFixed);
    border: 1.5px solid var(--grey0);
    border-radius: 4px;
    height: 3em;
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    background-color: var(--grey10);
    color: var(--grey1);
    width: 48%;

    :disabled {
      color: var(--grey1);
    }

    text-align: center;
    padding-top: 20px;
    cursor: pointer;

    :hover {
      background-color: var(--grey8);
      border: 1.5px solid var(--brand3);
    }
  }
  input[type="radio"]:checked + label {
    background-color: var(--brand1);
    color: var(--whiteFixed);
    border: 1.5px solid var(--brand1);
  }
`;

export const DivInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 30%;
  }
`;

export const CreateButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 30px;
`;
