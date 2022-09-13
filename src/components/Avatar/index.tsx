import { AvatarBox, DivContainer } from "./style";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

interface IAvatar {
  name: string;
  onClick?: any;
  size: string;
  bigAvatar: boolean;
  accountType?: boolean;
  color: string;
}

const Avatar = ({ name, size, bigAvatar, accountType, color }: IAvatar) => {
  const [formatedLetters, setFormatedLetters] = useState("");

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
  }, [name]);

  return (
    <AvatarBox bigAvatar={bigAvatar}>
      <DivContainer color={color} size={size}>
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
