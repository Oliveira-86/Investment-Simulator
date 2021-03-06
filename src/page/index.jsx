import React, { useEffect, useState, useContext } from "react";
import {
  FormContainer,
  Row,
  PageContainer,
  Title,
  FormTitle,
  Label,
  Flex,
  ResultContainer,
  FlexIcon,
  TitleContainer,
} from "./styles";
import ButtonBar from "../components/ButtonBar";
import Input from "../components/Input";
import Button from "../components/Button";
import * as api from "../api/api";

import { ThemeContext } from "styled-components";

import CurrencyInput from "react-currency-input-field";
import ResultData from "../components/ResultData";
import BarChart from "../components/BarChart";

import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

import "./stylesCss.css";

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
  const [rendimentoButtonLeft, setRendimentoButtonLeft] = useState(false);
  const [indexingButtonType, setIndexingButtonType] = useState("pre");
  const [hasResult, setHasResult] = useState(false);
  const [result, setResult] = useState();
  const [chartData, setChatData] = useState({});
  const [chartDataBlack, setChatDataBlack] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { colors } = useContext(ThemeContext);

  const rendType = redimentoType ? "liquido" : "bruto";

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
      setIsLoading(true);
      try {
        const { data } = await api.fetchIndexing();
        setIndexing(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
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

      const result = data.find(
        (obj) =>
          obj.tipoRendimento === rendType &&
          obj.tipoIndexacao === indexingButtonType
      );
      setResult(result);
      setChatData(result.graficoValores.comAporte);
      setChatDataBlack(result.graficoValores.semAporte);
    } catch (error) {
      console.log(error);
    }
    setHasResult(true);
  };

  const dataChart = Object.values(chartData);
  const dataChartBlack = Object.values(chartDataBlack);
  const labelChart = Object.keys(chartData);

  const onHandleClean = () => {
    setEnteredAporteInicial("");
    setEnteredAporteMensal("");
    setEnteredRentabilidade("");
    setEnteredPrazo("");
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
  console.log(props.theme);
  const aporteInicialInputClasses = aporteInicialInputIsInvalid
    ? "input-currency-invalid"
    : props.themeState
    ? "input-currency-dark"
    : "input-currency";

  const aporteMensalInputClasses = aporteMensalInputIsInvalid
    ? "input-currency-invalid"
    : props.themeState
    ? "input-currency-dark"
    : "input-currency";

  return (
    <PageContainer>
      <TitleContainer>
        <Title>Simulador de Investimentos</Title>
        <Switch
          onChange={props.toggleTheme}
          checked={props.themeState}
          className="react-switch"
          id="normal-switch"
          uncheckedIcon={
            <FlexIcon>
              <FaSun color={"#FFF"} />
            </FlexIcon>
          }
          checkedIcon={
            <FlexIcon>
              <FaMoon />
            </FlexIcon>
          }
          offColor={colors.primary}
          onColor={colors.primary}
        />
      </TitleContainer>
      <Flex>
        <FormContainer>
          <FormTitle>Simulador</FormTitle>

          <Row {...props}>
            {rendimentoButtonLeft ? (
              <ButtonBar
                rend
                title="Rendimento"
                onClickBruto={onClickRendButtonLeft}
                leftActive
                textRight="Bruto"
                textLeft="L??quido"
              />
            ) : (
              <ButtonBar
                rend
                title="Rendimento"
                onClickLiq={onClickRendButtonRight}
                rightActive
                textRight="Bruto"
                textLeft="L??quido"
              />
            )}
            {indexingButtonType === "pre" ? (
              <ButtonBar
                textRight="PR??"
                textLeft="FIXADO"
                textMid="POS"
                rightActive
                midButton={true}
                title="Tipos de indexa????o"
                onClickPre={() => setIndexingButtonType("pre")}
                onClickPos={() => setIndexingButtonType("pos")}
                onClickFix={() => setIndexingButtonType("ipca")}
              />
            ) : indexingButtonType === "pos" ? (
              <ButtonBar
                textRight="PR??"
                textLeft="FIXADO"
                textMid="POS"
                midActive
                midButton={true}
                title="Tipos de indexa????o"
                onClickPos={() => setIndexingButtonType("pos")}
                onClickPre={() => setIndexingButtonType("pre")}
                onClickFix={() => setIndexingButtonType("ipca")}
              />
            ) : (
              <ButtonBar
                textRight="PR??"
                textLeft="FIXADO"
                textMid="POS"
                leftActive
                midButton={true}
                title="Tipos de indexa????o"
                onClickPos={() => setIndexingButtonType("pos")}
                onClickPre={() => setIndexingButtonType("pre")}
                onClickFix={() => setIndexingButtonType("ipca")}
              />
            )}
          </Row>
          <Row {...props}>
            <div className="input-currency-container">
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
                data-testid="inicial"
                value={enteredAporteInicial}
              />
            </div>
            <div className="input-currency-container-left" style={{}}>
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
                data-testid="mensal"
                value={enteredAporteMensal}
              />
            </div>
          </Row>
          <Row {...props}>
            {prazoInputIsInvalid ? (
              <Input
                container
                label="Prazo (em meses)"
                number
                onChange={handlePrazoChange}
                onBlur={prazoInputBlurHandler}
                error
                value={enteredPrazo}
              />
            ) : (
              <Input
                label="Prazo (em meses)"
                number
                onChange={handlePrazoChange}
                onBlur={prazoInputBlurHandler}
                value={enteredPrazo}
              />
            )}
            {rentabilidadeInputIsInvalid ? (
              <Input
                container
                label="Rentabilidade"
                onChange={handleRentabilidadeChange}
                onBlur={rentabilidadeInputBlurHandler}
                error
                value={enteredRentabilidade}
              />
            ) : rentabilidadeIsTouched ? (
              <Input
                container
                label="Rentabilidade"
                onChange={handleRentabilidadeChange}
                onBlur={rentabilidadeInputBlurHandler}
                value={`${enteredRentabilidade}%`}
                onClick={() => setRentabilidadeIsTouched(false)}
              />
            ) : (
              <Input
                container
                label="Rentabilidade"
                onChange={handleRentabilidadeChange}
                onBlur={rentabilidadeInputBlurHandler}
                value={enteredRentabilidade}
                number
              />
            )}
          </Row>
          <Row {...props}>
            <Input
              label="IPCA (ao ano)"
              value={`${indexing.length > 0 ? indexing[0].valor : ""}%`}
              name="ipca"
            />
            <Input
              container
              label="CDI (ao ano)"
              value={`${indexing.length > 0 ? indexing[1].valor : ""}%`}
              name="cdi"
            />
          </Row>
          <Row {...props}>
            <Button
              label="Limpar Campos"
              variant="outlined"
              onClick={onHandleClean}
            />
            {isLoading ? (
              <Button loading />
            ) : formIsValid ? (
              <Button label="Simular" onClick={formSubmissionHandler} />
            ) : (
              <Button label="Simular" variant="disabled" />
            )}
          </Row>
        </FormContainer>

        <ResultContainer>
          {hasResult && (
            <>
              <ResultData
                aliquotaIR={result.aliquotaIR}
                ganhoLiquido={result.ganhoLiquido.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                valorFinalBruto={result.valorFinalBruto.toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}
                valorFinalLiquido={result.valorFinalLiquido.toLocaleString(
                  "pt-br",
                  { style: "currency", currency: "BRL" }
                )}
                valorPagoIR={result.valorPagoIR.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                valorTotalInvestido={result.valorTotalInvestido.toLocaleString(
                  "pt-br",
                  { style: "currency", currency: "BRL" }
                )}
              />
              <BarChart
                data={dataChart}
                labels={labelChart}
                dataBlack={dataChartBlack}
              />
            </>
          )}
        </ResultContainer>
      </Flex>
    </PageContainer>
  );
};

export default Page;
