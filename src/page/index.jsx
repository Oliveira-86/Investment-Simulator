import React, { useEffect, useState } from "react";
import {
  FormContainer,
  Row,
  PageContainer,
  Title,
  FormTitle,
  Label,
} from "./styles";
import ButtonBar from "../components/ButtonBar";
import Input from "../components/Input";
import Button from "../components/Button";
import * as api from "../api/api";

import "./stylesCss.css";

import CurrencyInput from "react-currency-input-field";

const Page = (props) => {
  // const [simulation, setSimulation] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
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
      <FormContainer onSubmit={formSubmissionHandler}>
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
          <div style={{ marginLeft: "35px" }}>
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
            <Button label="Simular" />
          ) : (
            <Button label="Simular" disabled />
          )}
        </Row>
      </FormContainer>
    </PageContainer>
  );
};

export default Page;