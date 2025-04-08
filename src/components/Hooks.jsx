
// ccc
// class  extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return (  );
//     }
// }

// export default ;

// rfc
// import React from 'react'

// export default function Hooks() {
//   return (
//     <div>

//     </div>
//   )
// }

// rafce
import React, { useEffect, useState } from 'react'

const Hooks = () => {
    // actualizacion del color por convencion con setcolor
    // este es el valor inicial  "yellow"
    const [color, setColor] = useState('yellow')
    const [fontSize, setfontSize] = useState('12px')
    const [contador, setContador] = useState(0)
    // tambien se puede realizar de la siguiente manera
    // // const [color, setColor] = React.useState('yellow')manejamos un estilo en linea


    useEffect(() => {
        let intervalo = setInterval(() => {
            setContador(contador + 1)
        }, 1000)
        // en este caso creo un estado para contar un numero cada segundo, el problema es //que tengo que limpiar este intervalo 
        console.log(intervalo)
        return () => {
            clearInterval(intervalo)
        }
        // tener en cuenta colocar el contador o lo que se vaya a cambiar.
    }, [contador])



    const fondo = {
        with: '100px',
        height: '500px',
        transition: '1s',
        backgroundColor: color,
    }

    const titulo = {
        fontSize: fontSize,
        transition: '1s',
    }


    function cambiarColor() {
        setColor(color === 'yellow' ? 'green' : 'yellow')
    }
    const cambiarTamano = function () {
        setfontSize(fontSize === '12px' ? '20px' : '12px')
    }

    return (
        <div>
            <div className="container" style={fondo}>
                <h1 style={titulo} onClick={cambiarTamano}>
                    Esto es un titulo dentro de un container
                </h1>
                <button onClick={cambiarColor}>Cambiar con estados el color del container</button>
                <p>Contador en tiempo real: {contador}</p>
            </div>
        </div>
    )
}

export default Hooks
