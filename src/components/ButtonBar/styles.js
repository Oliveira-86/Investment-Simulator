import styled from "styled-components";

export const ButtonBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 575px) {
    margin-bottom: 20px;
  }

`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  align-items: center;
  justify-content: space-between;
  

`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 180px;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1.5px solid #0c0c0c;
  height: 40px;

  @media(max-width: 575px) {
    margin-bottom: 20px;
    background: red;
    width: 250px;
    height: 50px;
  }
`;

export const Icon = styled.span`
  cursor: pointer;
`;

export const ButtonRight = styled.button`
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 12px;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;

  ${({ right }) =>
    right &&
    `
    border-right: 1.5px solid #0c0c0c;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px; 
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  `}
  ${({ rightActive }) =>
    rightActive &&
    `
    border-right: 1.5px solid #0c0c0c;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px; 
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background-color: #ed8e53;
    color: white;
  `}

  &:hover {
    ${({ right }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color:${({ rightActive }) =>
      rightActive ? "" : "rgb(237,142,83, 0.3)"};
    height: 100%;
  }
`;

export const ButtonMid = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 12px;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ midActive }) =>
    midActive &&
    `
    color: white;
    background-color: #ed8e53;
    border: 1px solid  #ed8e53;
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

&:hover {
    ${({ right }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color:${({ midActive }) =>
      midActive ? "" : "rgb(237,142,83, 0.3)"};
    height: 100%;
  }
`;

export const ButtonLeft = styled.button`
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  padding: 12px;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ leftActive }) =>
    leftActive &&
    `
    color: white;
    background-color: #ed8e53;
    border: 1px solid  #ed8e53;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;  
    padding-right: 5px;
    padding-left: 5px;
    height: 100%;
  `}

  ${({ left }) =>
    left &&
    `
    border-right: 1.5px solid #0c0c0c;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-right: 10px;
    padding-left: 10px;
  `}

&:hover {
    ${({ right }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid #0c0c0c;
    `}
    background-color:${({ leftActive }) =>
      leftActive ? "" : "rgb(237,142,83, 0.3)"};
    height: 100%;
  }
`;
