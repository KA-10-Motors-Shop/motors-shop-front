import { UseTokenProvider } from "../../providers/token";
import { AvatarBox, DivContainer } from "./style";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

interface IAvatar {
  token: string;
  onClick?: any;
  size: string;
  bigAvatar: boolean;
  accountType?: boolean;
}

const Avatar = ({ token, size, bigAvatar, accountType }: IAvatar) => {
  const { name }: any = jwt_decode(token);
  const [formatedLetters, setFormatedLetters] = useState("");
  const [randomColor, setRandomColor] = useState("");

  const lettersName = name.split(" ");

  const formatesLetters = () => {
    let letters = "";
    if (lettersName.length > 1 && lettersName[1]) {
      lettersName.forEach((element: any) => {
        letters += element[0];
      });
    } else {
      letters = lettersName[0][0];
    }

    return letters.slice(0, 2);
  };

  const history = useHistory();

  useEffect(() => {
    setFormatedLetters(formatesLetters());
    setRandomColor(`var(--random${Math.ceil(Math.random() * 12)})`);
  }, []);

  return (
    <AvatarBox bigAvatar={bigAvatar}>
      <DivContainer color={randomColor} size={size}>
        <h1>{formatedLetters}</h1>
      </DivContainer>
      {bigAvatar ? (
        <h2>
          {name} {accountType && <span>Anunciante</span>}
        </h2>
      ) : (
        <p onClick={() => history.push("/productViewAdmin")}>{name}</p>
      )}
    </AvatarBox>
  );
};

export default Avatar;
