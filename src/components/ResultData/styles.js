import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    margin-top: 30px;
    margin-left: -50px;
    width: 100%;
  }

  @media (max-width: 570px) {
    margin-left: -70px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 30px;

  @media (max-width: 570px) {
    font-size: 14px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 1em;

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }
`;
