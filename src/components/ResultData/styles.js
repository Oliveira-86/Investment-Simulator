import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    margin-left: 100px;
`;

export const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 30px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 1em;
`;