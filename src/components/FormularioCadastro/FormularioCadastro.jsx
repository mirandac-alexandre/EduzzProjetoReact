import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  //adicionando Hook para setar state de etapaAtual
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  //hook chamado quando componente for montado, atualizado ou desmontado
  useEffect(() => {
    //verificação para só enviar dados quando estiver na última página
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  //array para conter os formularios
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}  />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  //hook para setar a próxima etapa
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  //retorna o formulario atual pelo índice
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
