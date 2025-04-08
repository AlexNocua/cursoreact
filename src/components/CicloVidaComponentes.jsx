import React, { Component } from "react";
class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
    }

    state = {

        nombre: 'Alex',

    }

    cambiarnombe = () => {
        this.setState({ nombre: 'Juan' })
    }

    handleResize = () => {
        console.log(window.innerWidth);
    }
    // montar el componentes con los eventos y peticiones
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }


    // actualizaciones del componente
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps);
        if (prevState.nombre === this.state.nombre) {
            console.log('Mi estado no ha cambiado')
        } else {
            console.log("Mi estado cambio!! valor cambiado, Nombre:", this.state.nombre);
        }
    }

    // desmontaje del componente, limpiando eventos y timers
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    };

    render() {
        return (
            <>
                <h1>El nombre de esta persona es: {this.state.nombre} </h1>
                <button onClick={this.cambiarnombe.bind(this)}> Cambiar nombre</button>
            </>
        )
    }
}

export default CicloVidaComponentes;