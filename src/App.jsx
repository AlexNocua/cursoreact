import React, { Fragment } from "react"
import logo from './logo.svg';
import './App.css';
import PrimerComponenteClase from "./components/PrimerComponenteClase.jsx"
import Props from "./components/Props.jsx"
import State from "./components/State.jsx"
import EstilosTradicionales from "./components/EstilosTradicionales.jsx"
import EstilosEnLinea from "./components/EstilosEnLinea.jsx"
import EstilosEnModulo from "./components/EstilosEnModulo"
import EstilosConStyled from "./components/EstilosConStyled.jsx"
import Refs from "./components/Refs.jsx"
import Hooks from "./components/Hooks.jsx"
import Formularios from "./components/Formularios.jsx";
import Eventos from "./components/Eventos.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import SpreadOperator from "./components/SpreadOperator.jsx";
import IterarArrays from "./components/IterarArrays.jsx";
import IterarKeys from "./components/IterarKeys.jsx";
// import CicloVidaComponentes from "./components/CicloVidaComponentes.jsx"



function App() {
  const lista = ['pelota', 'carro', 'avion']
  return (

    // <Fragment>

    //   <h1>
    //     Este es un mensaje desde la plantilla padre
    //   </h1>
    //   <PrimerComponenteClase></PrimerComponenteClase>
    // </Fragment>
    <>
      {/* <Props nombre="Alex" cosas={lista}></Props> */}
      {/* <State></State> */}
      {/* <EstilosTradicionales>

      </EstilosTradicionales>
      */}

      {/* <EstilosEnLinea></EstilosEnLinea> */}
      {/* <EstilosEnModulo></EstilosEnModulo> */}
      {/* <EstilosConStyled></EstilosConStyled> */}


      {/* <Refs></Refs> */}

      {/* <CicloVidaComponentes></CicloVidaComponentes> */}

      {/* <Hooks></Hooks> */}
      {/* <Formularios>

      </Formularios> */}

      {/* <Eventos></Eventos> */}
      {/* <RenderizadoCondicional></RenderizadoCondicional> */}
      {/* <SpreadOperator></SpreadOperator> */}
      {/* <IterarArrays></IterarArrays> */}
      <IterarKeys></IterarKeys>
    </>
  );
}

export default App;
