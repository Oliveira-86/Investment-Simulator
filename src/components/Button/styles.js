import styled, { keyframes } from "styled-components";

const buttonLoading = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

export const StyledButton = styled.button`
  position: relative;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  width: 45%;
  color: ${(props) => props.theme.colors.textButtonBar};

  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `background-color: ${props.theme.colors.disabled}`;
      case "outlined":
        return "background-color: transparent";
      default:
        return `background-color: ${props.theme.colors.primary}`;
    }
  }};

  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return "border: 1px solid transparent";
      case "outlined":
        return `border: 1px solid ${props.theme.colors.text}`;
      default:
        return `border: 1px solid ${props.theme.colors.primary}`;
    }
  }};

  @media (max-width: 800px) {
    width: 35%;
  }

  @media (max-width: 575px) {
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
  }

  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `&:hover {background-color: ${props.theme.colors.disabled}}`;
      case "outlined":
        return "&:hover {background-color: rgba(0,0,0,0.05)}";
      default:
        return `&:hover {background-color: ${props.theme.colors.primaryHover}}`;
    }
  }}

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

    ${(props) =>
      props.loading &&
      ` 
      margin-left: -10px; 
      background-color: ${props.theme.colors.primaryHover};
    `}
  }
  ${({ loading }) => loading && `height: 33px`}
`;
