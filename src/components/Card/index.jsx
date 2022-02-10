import React from "react";
import { CardContainer, Title, Value } from "./styles";

const Card = (props) => {
  return (
    <CardContainer>
      <Title>{props.title}</Title>
      <Value>R$ {props.value}</Value>
    </CardContainer>
  );
};
export default Card;
