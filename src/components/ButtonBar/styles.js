import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1.5px solid #0c0c0c;
`;

export const Icon = styled.span`
    cursor: pointer;
`;

export const Button = styled.button`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 8px;
  width: 100%;
  background-color: transparent;
  height: 100%;
  border: none;
  cursor: pointer;

  ${({ right }) =>
    right &&
    `
    border-right: 1.5px solid #0c0c0c;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px; 
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  `}

  ${({ mid }) =>
    mid &&
    `
    border-right: 1.5px solid #0c0c0c;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-right: 10px;
    padding-left: 10px;
    height: 100%;
  `}

  &:active {
    ${({ right }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color: #ed8e53;
    color: white;
    height: 110%;
  }

  &:focus {
    ${({ right }) =>
      right &&
      `
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color: #ed8e53;
    height: 110%;
    color: white;
  }

  &:target {
    ${({ right }) =>
      right &&
      `
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color: #ed8e53;
    height: 110%;
    color: white;
  }
`;
