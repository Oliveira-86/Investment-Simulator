import React from "react";
import Card from "../Card";

import { Container, Grid, Title } from "./styles";

const ResultData = ({ aliquotaIR, ganhoLiquido, valorFinalBruto, valorFinalLiquido, valorPagoIR, valorTotalInvestido }) => {
  return (
    <Container>
      <Title>Resultado da Simulação</Title>
      <Grid>
        <Card title="Valor Final Bruto" value={valorFinalBruto} />
        <Card title="Alíquota do IR" value={aliquotaIR} percent />
        <Card title="Valor Pago em IR" value={valorPagoIR} />
        <Card title="Valor Final Líquido" value={valorFinalLiquido} green />
        <Card title="Valor Total Investido" value={valorTotalInvestido} />
        <Card title="Ganho Líquido" value={ganhoLiquido} green />
      </Grid>
    </Container>
  );
};

export default ResultData;
