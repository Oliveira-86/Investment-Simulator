import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  margin: 30px;
  background-color: #efefef;

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  margin: 15px;

  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    font-size: 25px;
  }
`;

export const Flex = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 575px) {
    flex-direction: column;
  }
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

  @media (max-width: 800px) {
    font-size: 22px;
    text-align: center;
  }

  @media (max-width: 575px) {
    font-size: 22px;
    margin-left: 0px;
  }
`;

export const FormContainer = styled.div`
  width: 35%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 520px;

  @media (max-width: 800px) {
    margin-left: 0px;
    width: 100%;
    font-size: 22px;
    height: 100%;
  }

  @media (max-width: 575px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    justify-content: space-evenly;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    margin-top: -5px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media (max-width: 575px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;
