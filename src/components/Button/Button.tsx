import React from "react";

import IButton from "./Button.interface";
import { ButtonStyle } from "./Button.style";

export const Button = (props: IButton) => {
  return <ButtonStyle>{props.label}</ButtonStyle>;
};
