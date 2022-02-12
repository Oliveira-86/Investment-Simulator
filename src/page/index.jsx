import React, { useEffect, useState } from "react";
import {
  FormContainer,
  Row,
  PageContainer,
  Title,
  FormTitle,
  Label,
} from "./styles";
import ButtonBarRend from "../components/ButtonBarRend";
import ButtonBarIndex from "../components/ButtonBarIndex";
import Input from "../components/Input";
import Button from "../components/Button";
import * as api from "../api/api";

import "./stylesCss.css";

import CurrencyInput from "react-currency-input-field";

const Page = (props) => {
  const [indexing, setIndexing] = useState([]);
  const [enteredAporteInicial, setEnteredAporteInicial] = useState("");
  const [enteredAporteInicialTouched, setEnteredAporteInicialTouched] =
    useState(false);
  const [enteredAporteMensal, setEnteredAporteMensal] = useState("");
  const [enteredAporteMensalTouched, setEnteredAporteMensalTouched] =
    useState(false);
  const [enteredPrazo, setEnteredPrazo] = useState("");
  const [enteredPrazoTouched, setEnteredPrazoTouched] = useState(false);
  const [enteredRentabilidade, setEnteredRentabilidade] = useState("");
  const [enteredRentabilidadeTouched, setEnteredRentabilidadeTouched] =
    useState(false);
  const [rentabilidadeIsTouched, setRentabilidadeIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [redimentoType, setRendimentoType] = useState(false);
  const [indexacaoType, setIndexacaoType] = useState("pre" | "pos" | "fixado");
  const [rendimentoButtonLeft, setRendimentoButtonLeft] = useState(false);

  const rendType = redimentoType ? "liquido" : "bruto";

  if (indexacaoType === 0) {
    setIndexacaoType("pre");
  }

  const enteredAporteInicialIsValid = enteredAporteInicial !== "";
  const aporteInicialInputIsInvalid =
    !enteredAporteInicialIsValid && enteredAporteInicialTouched;

  const enteredAporteMensalIsValid = enteredAporteMensal !== "";
  const aporteMensalInputIsInvalid =
    !enteredAporteMensalIsValid && enteredAporteMensalTouched;

  const enteredRentabilidadeIsValid = enteredRentabilidade !== "";
  const rentabilidadeInputIsInvalid =
    !enteredRentabilidadeIsValid && enteredRentabilidadeTouched;

  const enteredPrazoIsValid = enteredPrazo !== "";
  const prazoInputIsInvalid = !enteredPrazoIsValid && enteredPrazoTouched;

  useEffect(() => {
    if (
      enteredAporteInicialIsValid &&
      enteredRentabilidadeIsValid &&
      enteredAporteMensalIsValid &&
      enteredPrazoIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredAporteInicialIsValid,
    enteredRentabilidadeIsValid,
    enteredAporteMensalIsValid,
    enteredPrazoIsValid,
  ]);

  useEffect(() => {
    const fetchSimu = async () => {
      try {
        const { data } = await api.fetchIndexing();
        setIndexing(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSimu();
  }, []);

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredAporteInicialTouched(true);
    setEnteredAporteMensalTouched(true);
    setEnteredRentabilidadeTouched(true);
    setEnteredPrazoTouched(true);

    if (
      !enteredAporteInicialIsValid &&
      !enteredAporteMensalIsValid &&
      !enteredPrazoIsValid &&
      !enteredRentabilidadeIsValid
    ) {
      return;
    }

    try {
      const { data } = await api.fetchSimulations();

      console.log(data);
      const findObj = data.find(
        (obj) =>
          obj.tipoRendimento === rendType && obj.tipoIndexacao === indexacaoType
      );
      console.log(findObj);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickRendButtonLeft = () => {
    setRendimentoButtonLeft(false);
    setRendimentoType(false);
  };

  const onClickRendButtonRight = () => {
    setRendimentoButtonLeft(true);
    setRendimentoType(true);
  };

  const handleAporteInicialChange = (event) => {
    const aporteInicialValor = event;
    setEnteredAporteInicial(aporteInicialValor);
  };

  const aporteInicialInputBlurHandler = () => {
    setEnteredAporteInicialTouched(true);
  };

  const handleAporteMensalChange = (event) => {
    const aporteMensalValor = event;
    setEnteredAporteMensal(aporteMensalValor);
  };

  const aporteMensalInputBlurHandler = () => {
    setEnteredAporteMensalTouched(true);
  };

  const handleRentabilidadeChange = (event) => {
    setEnteredRentabilidade(event.target.value);
  };

  const rentabilidadeInputBlurHandler = () => {
    setEnteredRentabilidadeTouched(true);
    setRentabilidadeIsTouched(true);
  };

  const handlePrazoChange = (event) => {
    setEnteredPrazo(event.target.value);
  };

  const prazoInputBlurHandler = () => {
    setEnteredPrazoTouched(true);
  };

  const aporteInicialInputClasses = aporteInicialInputIsInvalid
    ? "input-currency-invalid"
    : "input-currency";

  const aporteMensalInputClasses = aporteMensalInputIsInvalid
    ? "input-currency-invalid"
    : "input-currency";

  return (
    <PageContainer>
      <Title>Simulador de Investimentos</Title>
      <FormContainer>
        <FormTitle>Simulador</FormTitle>
        <Row>
          {rendimentoButtonLeft ? (
            <ButtonBarRend
              title="Rendimento"
              onClickBruto={onClickRendButtonLeft}
              leftActive
            />
          ) : (
            <ButtonBarRend
              title="Rendimento"
              onClickLiq={onClickRendButtonRight}
              rightActive
            />
          )}
          <ButtonBarIndex
            title="Tipos de indexação"
            onClickPre={() => setIndexacaoType("pre")}
            onClickPos={() => setIndexacaoType("pos")}
            onClickFix={() => setIndexacaoType("fixado")}
            indexing={true}
          />
        </Row>
        <Row>
          <div>
            {aporteInicialInputIsInvalid ? (
              <Label {...props} error>
                Aporte Inicial
              </Label>
            ) : (
              <Label {...props}>Aporte Inicial</Label>
            )}
            <CurrencyInput
              intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              className={aporteInicialInputClasses}
              onValueChange={handleAporteInicialChange}
              onBlur={aporteInicialInputBlurHandler}
            />
          </div>
          <div style={{ marginLeft: "45px" }}>
            {aporteMensalInputIsInvalid ? (
              <Label {...props} error>
                Aporte Mensal
              </Label>
            ) : (
              <Label {...props}>Aporte Mensal</Label>
            )}
            <CurrencyInput
              intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              className={aporteMensalInputClasses}
              onValueChange={handleAporteMensalChange}
              onBlur={aporteMensalInputBlurHandler}
            />
          </div>
        </Row>
        <Row>
          {prazoInputIsInvalid ? (
            <Input
              label="Prazo (em meses)"
              number
              onChange={handlePrazoChange}
              onBlur={prazoInputBlurHandler}
              error
            />
          ) : (
            <Input
              label="Prazo (em meses)"
              number
              onChange={handlePrazoChange}
              onBlur={prazoInputBlurHandler}
            />
          )}
          {rentabilidadeInputIsInvalid ? (
            <Input
              label="Rentabilidade"
              onChange={handleRentabilidadeChange}
              onBlur={rentabilidadeInputBlurHandler}
              error
            />
          ) : rentabilidadeIsTouched ? (
            <Input
              label="Rentabilidade"
              onChange={handleRentabilidadeChange}
              onBlur={rentabilidadeInputBlurHandler}
              value={`${enteredRentabilidade}%`}
              onClick={() => setRentabilidadeIsTouched(false)}
            />
          ) : (
            <Input
              label="Rentabilidade"
              onChange={handleRentabilidadeChange}
              onBlur={rentabilidadeInputBlurHandler}
              number
            />
          )}
        </Row>
        <Row>
          <Input
            label="IPCA (ao ano)"
            value={`${indexing.length > 0 ? indexing[0].valor : ""}%`}
          />
          <Input
            label="CDI (ao ano)"
            value={`${indexing.length > 0 ? indexing[1].valor : ""}%`}
          />
        </Row>
        <Row>
          <Button label="Limpar Campos" secondary />
          {formIsValid ? (
            <Button label="Simular" onClick={formSubmissionHandler} />
          ) : (
            <Button label="Simular" disabled />
          )}
        </Row>
      </FormContainer>
    </PageContainer>
  );
};

export default Page;
