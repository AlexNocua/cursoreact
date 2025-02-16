// componentes de clase

// primera forma de crear un componente con "ccc"

import React, { Component } from "react";

class PrimerComponenteClase extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <h1>Componente creado por clases</h1>
        );
    }
}

export default PrimerComponenteClase;