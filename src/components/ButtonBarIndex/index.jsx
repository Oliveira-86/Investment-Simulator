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

const ButtonBarIndex = (props) => {
  return (
    <ButtonBarContainer>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Icon>
          <AiOutlineInfoCircle size={13} />
        </Icon>
      </TitleContainer>
      <ButtonsContainer >
        <Button right {...props} onClick={props.onClickPre}>
          <MdOutlineDone size={13} />
          PRÉ
        </Button> <Button right {...props} onClick={props.onClickPos}>
          <MdOutlineDone size={13} />
          POS
        </Button>
        <Button {...props} onClick={props.onClickFix}>FIXADO</Button>
      </ButtonsContainer>
    </ButtonBarContainer>
  );
};

export default ButtonBarIndex;
