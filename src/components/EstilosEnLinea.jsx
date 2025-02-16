import React, { Component } from "react"
class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const horaPm = '12:00pm'
        const estilos = {
            // Es importante recordar que el nombre de los estilos en js se escriben de la amnera camelCase
            color: "green",
            fontSize: "12px",
            // tener en cuenta que cada uno de  estos estilos se pueden ajustar dinamicamente, en ejemplo utilizando valores ternarios
            backgroundColor: horaPm == '12:00pm' ? 'black' : 'red'
        }
        return (
            <>
                <h1 style={estilos}>Aqui se aplican estilos en linea</h1>
            </>
        );
    }
}

export default EstilosEnLinea;