import styled from "styled-components";

export const ButtonBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: ${({ rend }) => rend && "30px"};

  @media (max-width: 800px) {
    padding-left: 40px;
    justify-content: center;
    margin-right: ${({ rend }) => rend && "0px"};
  }
  @media (max-width: 575px) {
    width: 100%;
    margin-right: 0;
    padding: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: ${({ rend }) => (rend ? "100%" : "100%")};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: ${({ rend }) => (rend ? "80%" : "80%")};
  }

  @media (max-width: 575px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({ rend }) => (rend ? "100%" : "100%")};
  border-radius: 6px;
  border: 1.5px solid ${(props) => props.theme.colors.border};
  height: 40px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
    width: ${({ rend }) => (rend ? "80%" : "80%")};
    height: 50px;
  }

  @media (max-width: 575px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const Icon = styled.span`
  cursor: pointer;
  margin-top: -8px;
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
  color: ${(props) => props.theme.colors.textButtonBar};

  ${({ right, theme }) =>
    right &&
    `
    border-right: 1.5px solid ${theme.colors.border};
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px; 
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  `}
  ${({ rightActive, theme }) =>
    rightActive &&
    `
    border-right: 1.5px solid ${theme.colors.border};
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px; 
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    background-color: ${theme.colors.primary};
    color: white;
  `}

  &:hover {
    ${({ right, theme }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid ${theme.colors.border};
    `}
    background-color:${({ rightActive, theme }) =>
      rightActive ? "" : theme.colors.secondaryHover};
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
  color: ${(props) => props.theme.colors.textButtonBar};

  ${({ midActive, theme }) =>
    midActive &&
    `
    color: white;
    background-color: ${theme.colors.primary};
    border: 1px solid  ${theme.colors.primary};
  `}

  ${({ mid, theme }) =>
    mid &&
    `
    border-right: 1.5px solid ${theme.colors.border};
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-right: 10px;
    padding-left: 10px;
    height: 100%;
  `}

&:hover {
    ${({ right, theme }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid ${theme.colors.border};
    `}
    background-color:${({ midActive, theme }) =>
      midActive ? "" : theme.colors.primary};
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
  color: ${(props) => props.theme.colors.textButtonBar};

  ${({ leftActive, theme }) =>
    leftActive &&
    `
    color: white;
    background-color:  ${theme.colors.primary};
    border: 1px solid   ${theme.colors.primary};
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;  
    padding-right: 5px;
    padding-left: 5px;
    height: 100%;
  `}

  ${({ left, theme }) =>
    left &&
    `
    border-right: 1.5px solid ${theme.colors.border};
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-right: 10px;
    padding-left: 10px;
  `}

&:hover {
    ${({ right, theme }) =>
      right &&
      `
        height: 110%;
        border-right: 1.5px solid ${theme.colors.border};
    `}
    background-color:${({ leftActive, theme }) =>
      leftActive ? "" : theme.colors.secondaryHover};
    height: 100%;
  }
`;
