import React from "react";
import { StyledButton } from "./styles";

const Button = (props) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;
