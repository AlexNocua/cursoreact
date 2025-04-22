import React, { Fragment, useState } from "react"
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
import Padre from "./components/iterandoComponentes/Padre.jsx";
import ComunicacionCoponentes1 from "./components/ComunicacionCoponentes1.jsx";
import ComunicacionCoponentes2 from "./components/ComunicacionCoponentes2.jsx";
import Fetch from "./components/Fetch.jsx";
// import CicloVidaComponentes from "./components/CicloVidaComponentes.jsx"



function App() {
  const lista = ['pelota', 'carro', 'avion']




  const styles = {
    'margin': '12px',
    'display': 'flex',
    'justify-content': 'center'
  }


  // ······························
  // comunicacion de padre a hijo 1
  const [mensajeParaHijo1, setMensajeParaHijo1] = useState('')
  const enviarMensajeHijo1 = () => {
    setMensajeParaHijo1("Hola, este es un mensaje del padre para el hijo 1")
  }
  // comunicacion de padre a hijo 2
  const [mensajeParaHijo2, setMensajeParaHijo2] = useState('')
  // ······························


  // comunicacion de hijo 1 a padre
  const [mensajeHijo1Padre, setMensajeHijo1Padre] = useState('')
  const recibirMensajeHijo1 = (mensaje) => {
    setMensajeHijo1Padre(mensaje)
  }
  // ······························

  // comunicacion de hijo 2 a padre
  const [mensajeHijo2Padre, setMensajeHijo2Padre] = useState('')
  const recibirMensajeHijo2 = (mensaje) => {
    setMensajeHijo2Padre(mensaje)
  }
  // ······························

  // comunicacion de hijo1 a hijo2
  const [mensajeH1H2, setMensajeH1H2] = useState('')
  const recibirMensajeH1ParaH2 = (mensaje) => {
    setMensajeH1H2(mensaje)
  }
  // ······························

  // comunicacion de hij2 a hijo1
  const [mensajeH2H1, setMensajeH2H1] = useState('')
  const recibirMensajeH2ParaH1 = (mensaje) => {
    setMensajeH2H1(mensaje)
  }
  // ······························


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
      {/* <IterarKeys></IterarKeys> */}
      {/* <Padre></Padre> */}


      {/* comunicacion de componentes
      <center>
        <h1>Estos componentes estan dentro del componente padre. 😁</h1>
        <div style={styles}>
          <ComunicacionCoponentes1 mensajeDelPadre={mensajeParaHijo1} enviarMensajesPadre={recibirMensajeHijo1} enviarMensajeHermano={recibirMensajeH1ParaH2} recibirMensajeHijo2={mensajeH2H1}></ComunicacionCoponentes1>
          <ComunicacionCoponentes2 enviarMensajesPadre={recibirMensajeHijo2} enviarMensajeHermano={recibirMensajeH2ParaH1} recibirMensajeHijo1={mensajeH1H2}></ComunicacionCoponentes2>
        </div>
        <button onClick={enviarMensajeHijo1}>Enviar mensaje del padre al hijo 1</button>
        <button>Enviar mensaje del padre al hijo 2</button>
        <br /><br />
        <h3>Mensajes de mis hijos</h3>
        <p>Mensaje recibido del hijo 1:{mensajeHijo1Padre}</p>
        <p>Mensaje recibido del hijo 2:{mensajeHijo2Padre}</p>
      </center> */}

      <Fetch></Fetch>
    </>
  );
}

export default App;
