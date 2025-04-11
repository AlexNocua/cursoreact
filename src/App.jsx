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
      <Formularios>

      </Formularios>
      <h1>buenas</h1>
    </>

  );
}

export default App;
