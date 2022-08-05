import React from "react";

import IRadio from "./Radio.interface";
import { RadioContainer, RadioLabel, Rdo } from "./Radio.style";

export const Radio = (props: IRadio) => {
  return (
    <RadioContainer>
      <Rdo type={props.type} name={props.name} id={props.id} value={props.value}></Rdo>
      <RadioLabel htmlFor={props.for}>{props.label}</RadioLabel>
    </RadioContainer>
  );
};
