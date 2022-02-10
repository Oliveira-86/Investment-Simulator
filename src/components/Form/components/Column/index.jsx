import React from "react";
import Button from "../../../Button";
import Input from "../../../Input";
import ButtonBar from "../../../ButtonBar";
import { ColumnContainer } from "./styles";

const Column = () => {
  return (
    <ColumnContainer>
      <ButtonBar
        title="Tipos de indexação"
        textRight="PRÉ"
        textMid="POS"
        textLeft="FIXADO"
      />
      <Input label='Aporte Inicial' />
      <Input label='Prazo (meses)' />
      <Input label='IPCA (ao ano)' />
      <Button label="Limpar Campos" secondary  />
    </ColumnContainer>
  );
};

export default Column;
