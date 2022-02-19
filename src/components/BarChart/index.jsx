import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Container, Heading } from "./styles";
import { ThemeContext } from "styled-components";

const BarChart = ({ labels, data, dataBlack }) => {
  const { colors } = useContext(ThemeContext)
  return (
    <Container data-testid='container'>
        <Heading>Projeção de Valores</Heading>
      <Bar
        options={{
          indexAxis: "x",
        }}
        data={{
          labels,
          datasets: [
            {
                label: "sem aporte",
                data: dataBlack,
                backgroundColor: [colors.text],
              },
            {
              label: "com aporte",
              data,
              backgroundColor: [colors.primary],
            },
          ],
        }}
      />
    </Container>
  );
};

export default BarChart;
