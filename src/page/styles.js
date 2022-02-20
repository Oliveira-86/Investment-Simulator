import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  margin: 30px;
  background-color: ${(props) => props.theme.colors.background};;

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  margin: 15px;

  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
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
  margin-left: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
  margin-left: 0px;

  }

  @media (max-width: 575px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const Label = styled.label`
  font-size: 13px;
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
  width: 100%;

  @media (max-width: 800px) {
    justify-content: space-around;
    align-items:center;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    margin-top: -5px;
    width: 250px
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;

  @media (max-width: 575px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 575px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;


export const FlexIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  padding-top: 5px;
`;

