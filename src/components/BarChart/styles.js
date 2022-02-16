import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 800px) {
    margin-left: -50px;
    margin-top: 50px;
  }

  @media (max-width: 570px) {
    height: 300px;
    width: 100%;
    margin-left: -120px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ horizontal }) => (horizontal ? "y" : "x")}
  }
`;

export const Heading = styled.h5`
  margin-bottom: 20px;

  @media (max-width: 570px) {
    text-align: center;
  }
`;
