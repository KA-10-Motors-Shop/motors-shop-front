import { UseTokenProvider } from "../../providers/token";
import { DivContainer } from "./style";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

interface IAvatar {
  token: string;
  onClick?: any;
}

const Avatar = ({ token }: IAvatar) => {
  const { name }: any = jwt_decode(token);
  const [formatedLetters, setFormatedLetters] = useState("");
  const [randomColor, setRandomColor] = useState("");

  const lettersName = name.split(" ");

  const formatesLetters = () => {
    let letters = "";
    if (lettersName.length > 1 && lettersName.length <= 2) {
      lettersName.forEach((element: any) => {
        letters += element[0];
      });
    } else {
      letters = lettersName[0][0];
    }

    return letters;
  };

  useEffect(() => {
    setFormatedLetters(formatesLetters());
    setRandomColor(`var(--random${Math.floor(Math.random() * 13)})`);
  }, []);

  return (
    <>
      <DivContainer color={randomColor}>
        <p>{formatedLetters}</p>
      </DivContainer>
      <p>{name}</p>
    </>
  );
};

export default Avatar;
