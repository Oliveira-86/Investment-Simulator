import React, { useEffect, useState } from "react";
import { FormContainer, Row, PageContainer, Title, FormTitle } from "./styles";
import ButtonBar from "../components/ButtonBar";
import Input from "../components/Input";
import Button from "../components/Button";
import * as api from "../api/api";

const Page = () => {
  // const [simulation, setSimulation] = useState([]);
  const [indexing, setIndexing] = useState([]);
  const [indexingIpcaValue, setIndexingIpcaValue] = useState();
  const [indexingCdiValue, setIndexingCdiValue] = useState();

  useEffect(() => {
    const fetchSimu = async () => {
      const { data } = await api.fetchIndexing();

      setIndexing(data);
    };
    fetchSimu();
  }, []);

  useEffect(() => {
    if (indexing.length > 0) {
      setIndexingIpcaValue(indexing[0].valor);
      setIndexingCdiValue(indexing[1].valor);
    }
  }, [indexing]);

  return (
    <PageContainer>
      <Title>Simulador de Investimentos</Title>
      <FormContainer>
        <FormTitle>Simulador</FormTitle>
        <Row>
          <ButtonBar title="Rendimento" textRight="Bruto" textLeft="Líquido" />
          <ButtonBar
            title="Tipos de indexação"
            textRight="PRÉ"
            textMid="POS"
            textLeft="FIXADO"
            indexing={true}
          />
        </Row>
        <Row>
          <Input label="Aporte Inicial" />
          <Input label="Aporte Mensal" />
        </Row>
        <Row>
          <Input label="Prazo (meses)" />
          <Input label="Rendimento" />
        </Row>
        <Row>
          <Input label="IPCA (ao ano)" value={`${indexingIpcaValue}%`} />
          <Input label="CDI (ao ano)" value={`${indexingCdiValue}%`} />
        </Row>
        <Row>
          <Button label="Limpar Campos" secondary />
          <Button label="Simular" />
        </Row>
      </FormContainer>
    </PageContainer>
  );
};

export default Page;
