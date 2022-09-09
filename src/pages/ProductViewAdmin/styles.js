import styled from "styled-components";

export const MainSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey7);
  z-index: -1;

  main {
    display: flex;
    justify-content: center;
  }
`;

export const PurpleBox = styled.div`
  width: 100%;
  height: 357px;
  position: fixed;
  top: 0;
  background-color: var(--brand2);
  z-index: 0;
  margin-top: 50px;
`;

export const ProfileBox = styled.div`
  width: 80%;
  height: 400px;
  background-color: white;
  border-radius: 4px;
  z-index: 1;
  margin-top: 170px;
  padding: 44px 41px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  p {
    width: 100%;
    height: 50px;
    line-height: 1;
  }
`;
