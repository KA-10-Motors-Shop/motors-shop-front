import styled from "styled-components";

interface IDivContainer {
  size: string;
}

export const DivContainer = styled.div<IDivContainer>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 150px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-weight: 700;
`;

interface IAvatarBox {
  bigAvatar: boolean;
}

export const AvatarBox = styled.div<IAvatarBox>`
  display: flex;
  align-items: ${({ bigAvatar }) => (bigAvatar ? "left" : "center")};
  flex-flow: ${({ bigAvatar }) => (bigAvatar ? "column" : "row")};
  gap: 10px;

  h1 {
    font-size: ${({ bigAvatar }) => (bigAvatar ? "36px" : "16px")};
  }
  h2 {
    margin-top: 20px;
    font-size: 20px;

    span {
      background-color: var(--brand4);
      color: var(--brand1);
      padding: 4px 8px;
      margin-left: 5px;
      border-radius: 4px;
    }
  }
`;
