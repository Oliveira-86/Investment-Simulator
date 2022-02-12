import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import {
  ButtonsContainer,
  Title,
  TitleContainer,
  ButtonRight,
  ButtonLeft,
  Icon,
  ButtonBarContainer
} from "./styles";

const ButtonBarRend = (props) => {
  return (
    <ButtonBarContainer>
      <TitleContainer>
        <Title>{props.title}</Title>
        <Icon>
          <AiOutlineInfoCircle size={13} />
        </Icon>
      </TitleContainer>
      <ButtonsContainer >
        <ButtonRight right {...props} onClick={props.onClickBruto}>
          <MdOutlineDone size={13} />
          Bruto
        </ButtonRight>
        <ButtonLeft {...props} onClick={props.onClickLiq}>Líquido</ButtonLeft>
      </ButtonsContainer>
    </ButtonBarContainer>
  );
};

export default ButtonBarRend;
