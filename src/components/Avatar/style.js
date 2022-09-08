import styled from "styled-components";

export const DivContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 150px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-weight: 700;
`;
