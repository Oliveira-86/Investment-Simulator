import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import {
  ButtonsContainer,
  Title,
  TitleContainer,
  Button,
  Icon,
  ButtonBarContainer
} from "./styles";

const ButtonBar = (props) => {
  return (
    <ButtonBarContainer>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Icon>
          <AiOutlineInfoCircle size={13} />
        </Icon>
      </TitleContainer>
      <ButtonsContainer>
        <Button right {...props}>
          <MdOutlineDone size={13} />
          {props.textRight}
        </Button>
        {props.indexing && (
          <Button {...props} mid>
            {props.textMid}
          </Button>
        )}
        <Button {...props}>{props.textLeft}</Button>
      </ButtonsContainer>
    </ButtonBarContainer>
  );
};

export default ButtonBar;
