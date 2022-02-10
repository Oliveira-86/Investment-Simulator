import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  margin: 30px;
  background-color: #efefef;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: #1c1c1c;
  margin-bottom: 20px;
  text-align: start;
  font-weight: 600;

  ${({ error }) =>
    error &&
    `
    color: red;
  `}
`;

export const FormTitle = styled.h1`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  width: 35%;
  margin-left: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;


