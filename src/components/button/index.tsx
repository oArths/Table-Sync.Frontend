import React from "react";
import * as S from "./style";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  background: string;
  height: string;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <S.Button  $height={props.height} $background={props.background}>
      {props.title}
    </S.Button>
  );
};
