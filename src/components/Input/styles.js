import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #1c1c1c;
  margin-bottom: 10px;
  text-align: start;
  font-weight: 600;

  ${({ error }) => error && `
    color: red;
  `}
`;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 1.5px solid #1c1c1c;
  background-color: transparent;
  padding: 5px;
  font-size: 15px;

  ${({ error }) => error && `
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
