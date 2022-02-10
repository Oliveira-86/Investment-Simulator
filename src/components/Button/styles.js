import styled, { keyframes } from "styled-components";

const buttonLoading = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

export const StyledButton = styled.button`
  position: relative;
  padding: 12px;
  background-color: #ed8e53;
  border-radius: 6px;
  width: 180px;
  cursor: pointer;
  border: 1px solid #ed8e53;
  font-weight: 700;

  ${({ secondary }) =>
    secondary &&`     
      background-color: transparent; 
      border: 1px solid black;

      &:hover {
        background-color: transparent;
      }
    `}

    ${({ disabled }) => disabled && `
      cursor: none;
      background-color: #c0c0c0;
      border: 1px solid #c0c0c0;
      color: #0c0c0c;

      &:hover {
        background-color: #c0c0c0;
      }
    `}

  &:hover {
    background-color: #d78b5c;
  }

  :before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -100000px;
    border-radius: 50%;
    border: 1px solid #fff;
    border-top-color: #ccc;
    animation: ${buttonLoading} 0.6s linear infinite;

    ${({ loading }) => loading && ` margin-left: -10px`}
  }
  ${({ loading }) => loading && `height: 33px`}
`;
