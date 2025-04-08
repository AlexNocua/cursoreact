import React, { Component, createRef } from "react";
class Refs extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {

        const cambioColor = createRef()
        const cambioColorTexto = () => {
            console.log('buenas');
            cambioColor.current.style.color = "yellow"
        }
        return (
            <>
                <h1 ref={cambioColor}> Manejo del DOM con "refs"</h1>
                <button onClick={cambioColorTexto}>Cambiar el color del Titulo</button>
            </>
        );
    }
}

export default Refs;