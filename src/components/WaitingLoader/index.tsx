import NotFoundItems from "../NotFoundItems";
import { DivContainer } from "./style";

interface IWaitingLoader {
  length: number;
  status: number;
}

const WaitingLoader = ({ length, status }: IWaitingLoader) => {
  return (
    <>
      {length === 0 && status === 200 ? (
        <NotFoundItems />
      ) : (
        <DivContainer>
          <div></div>
        </DivContainer>
      )}
    </>
  );
};

export default WaitingLoader;
