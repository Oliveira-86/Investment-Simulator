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
  ButtonBarContainer,
  ButtonMid,
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
      <ButtonsContainer>
        <ButtonRight
          right
          {...props}
          onClick={
            props.midButton ? 
            props.onClickPre : 
            props.onClickBruto
          }
        >
          {props.rightActive ? (
            <>
              <MdOutlineDone size={13} />
              {props.textRight}
            </>
          ) : (
            <>{props.textRight}</>
          )}
        </ButtonRight>
        {props.midButton && (
          <ButtonMid mid {...props} onClick={props.onClickPos}>
              {props.midActive ? (
            <>
              <MdOutlineDone size={13} />
              {props.textMid}
            </>
          ) : (
            <>{props.textMid}</>
          )}
          </ButtonMid>
        )}
        <ButtonLeft
          {...props}
          onClick={props.midButton ? props.onClickFix : props.onClickLiq}
        >
           {props.leftActive ? (
            <>
              <MdOutlineDone size={13} />
              {props.textLeft}
            </>
          ) : (
            <>{props.textLeft}</>
          )}
        </ButtonLeft>
      </ButtonsContainer>
    </ButtonBarContainer>
  );
};

export default ButtonBarRend;
