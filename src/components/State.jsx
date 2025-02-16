import React, { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props);
    }
    state = { nombre: ' Alex', apellidos: ' Nocua' }

    cambiarDatos() {

        console.log('Funcionando');

        if (this.state.nombre === " Alex") {

            this.setState(
                {
                    nombre: ' Eduardo',
                    apellido: ' Nocua'
                }
            )
        } else {
            this.setState(
                {
                    nombre: ' Alex',

                }
            )
        }

    }
    render() {
        return (
            <>
                <h1>Hola, mi nombre es
                    {this.state.nombre}
                    {this.state.apellidos}
                </h1>
                <button onClick={this.cambiarDatos.bind(this)}>Click</button></>
        );
    }
}

export default State;