import React from "react";
import { Bar } from "react-chartjs-2";
import { Container, Heading } from "./styles";

const BarChart = ({ labels, data, dataBlack }) => {
  return (
    <Container >
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
                backgroundColor: ["#000"],
              },
            {
              label: "com aporte",
              data,
              backgroundColor: ["#ed8e53"],
            },
          ],
        }}
      />
    </Container>
  );
};

export default BarChart;
