import React from "react";
import { CardContainer, Title, Value } from "./styles";

const Card = (props) => {
  return (
    <CardContainer>
      <Title>{props.title}</Title>
      {props.percent ? (
        <Value {...props}>{props.value}%</Value>
        ) : (
        <Value {...props}>{props.value}</Value>
      )}
    </CardContainer>
  );
};
export default Card;
