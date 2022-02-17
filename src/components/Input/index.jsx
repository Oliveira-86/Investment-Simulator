import React from "react";
import { Container, ErrorMsg, Label, StyledInput } from "./styles";

const Input = (props) => {
  return (
    <Container>
      <Label {...props} htmlFor={props.name}>
        {props.label}
      </Label>
      <StyledInput
        {...props}
        type={props.number ? "number" : "text"}
        id={props.name}
        name={props.name}
        data-testid={props.name}
      />
      <ErrorMsg {...props}>{props.errorMessage}</ErrorMsg>
    </Container>
  );
};

export default Input;
