import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;

  @media (max-width: 800px) {
    display:flex,
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  @media (max-width: 575px) {
    display:flex,
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
  }

`;

export const Heading = styled.h5`
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 22px;
    text-align: center;
  }
`;
