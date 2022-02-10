import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #828282;
  margin-bottom: 10px;

  ${({ error }) => error && `
    color: red;
  `}
`;

export const StyledInput = styled.input.attrs({ type: "number" })`
  border: none;
  border-bottom: 1.5px solid #1c1c1c;

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
