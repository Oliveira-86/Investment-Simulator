import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${({ container }) => container && "50px"}; 
  
  @media (max-width: 800px) {
    width: 100%;
    margin-left: 40px;
  }
  
  @media (max-width: 575px) {
    margin-left: 0;
    margin-bottom: 20px;
    height: 50px;
    width: 100%;
  }
  `;

export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 10px;
  text-align: start;
  font-weight: 600;
  
  ${({ error }) =>
    error &&
    `
    color: red;
    `}
`;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.text};
  background-color: transparent;
  font-size: 15px;
  width: 100%;

  @media (max-width: 800px) {
    width: 80%;
  }
  @media (max-width: 575px) {
    width: 100%;
  }

  ${({ error }) =>
    error &&
    `
    border-bottom: 1.5px solid red;
  `}

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 10px;
  margin-top: 3px;
`;
