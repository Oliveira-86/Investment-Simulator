import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  margin: 30px;
  background-color: #efefef;

  @media (max-width: 570px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 575px) {
    font-size: 16px;
    margin-left: -80px;
  }
`;

export const Flex = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
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
    margin-left: 70px;
  }

  @media (max-width: 575px) {
    font-size: 16px;
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
    justify-content: space-around;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
