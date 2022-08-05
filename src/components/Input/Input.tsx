import React from "react";

import IInput from "./Input.interface";
import { InputContainer, InputLabel, Int } from "./Input.style";

export const Input = (props: IInput) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={props.for}>{props.label}</InputLabel>
      <Int type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange}></Int>
    </InputContainer>
  );
};
