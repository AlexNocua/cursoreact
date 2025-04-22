import React from 'react'

const ComunicacionCoponentes1 = (props) => {
  const estilos = {
    'display': 'flex',
    'flex-direction': 'column',
    'background': 'green',
    'padding': '12px',
  }

  // seccion de codigo en la que se comprueba si se recibio un mensaje para mostrarlo en el componente numero 1
  var recibioMensaje = false
  if (props.mensajeDelPadre !== '') {
    recibioMensaje = true
  }
  // Seccion para enviar un mensaje al padre
  const enviarMensajePadre = () => {
    props.enviarMensajesPadre('Este es un mensaje del hijo 1 al padre')
  }

  // seccion para enviar mensajes a hermano 2
  const enviarMensajeHermano2 = () => {
    props.enviarMensajeHermano("Hola hermano, te saluda Hermano 1.")
  }
  return (
    <div style={estilos}>
      <h1>Componente 1</h1>
      {recibioMensaje && (<small>{props.mensajeDelPadre}</small>)}
      <br />
      <button onClick={enviarMensajePadre}>Enviar mensaje al padre</button>
      <button onClick={enviarMensajeHermano2}> Enviar mensaje al Hermano 2</button>

      <h3>Mensaje recibido</h3>
      {props.recibirMensajeHijo2}
    </div>
  )

}

export default ComunicacionCoponentes1
