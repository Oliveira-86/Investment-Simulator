import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 800px) {
    margin-top: 30px;
    margin-left: -50px;
    width: 100%;
  }

  @media (max-width: 570px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    font-size: 22px;
    text-align: center;
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
    width: 100%;
    align-items: center;
  }
`;
