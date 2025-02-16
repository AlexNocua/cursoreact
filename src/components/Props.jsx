import React, { Component } from "react";

class Props extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <>
                <h1>
                    El nombre de mi novia es {
                        this.props.nombre}
                </h1>
                <h3>
                    tengo una lista  {
                        this.props.cosas
                    }</h3></>
        );
    }
}

export default Props;