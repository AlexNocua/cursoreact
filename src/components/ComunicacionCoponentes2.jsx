import React from 'react'

const ComunicacionCoponentes2 = (props) => {
  const estilos = {
    'display': 'flex',
    'flex-direction': 'column',
    'background': 'blue',
    'padding': '12px',
  }


  // Seccion para enviar un mensaje al padre
  const enviarMensajePadre = () => {
    props.enviarMensajesPadre('Este es un mensaje del hijo 2 al padre')
  }

  // seccion para enviar mensajes a hermano 1
  const enviarMensajeHermano1 = () => {
    props.enviarMensajeHermano("Hola hermano 1, te saluda Hermano 2.")
  }
  return (
    <div style={estilos}>

      <h1>Componente 2</h1>
      <button onClick={enviarMensajePadre}>Enviar Mensaje al  padre.</button>
      <button onClick={enviarMensajeHermano1}> Enviar mensaje al Hermano 1</button>

      <h3>Mensaje recibido</h3>
      {props.recibirMensajeHijo1}
    </div>
  )
}

export default ComunicacionCoponentes2
