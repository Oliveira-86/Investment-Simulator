import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 60px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;

  ${({ green }) => green && `
    color: #4fa841;
  `}
`;
export const Value = styled.p`
  font-size: 13px;
  margin-bottom: 3px;
  font-weight: 500;

  ${({ green }) => green && `
    color: #4fa841;
  `}
`;
