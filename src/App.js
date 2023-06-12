import React from "react";
import RegisterTarefas from "./routes/registerTarefas";
import styled from 'styled-components';
import Requisicao from "./routes/requisicoes";
import Menu from "./components/Menu";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Menu />
    </AppContainer>
  );
}

export default App;