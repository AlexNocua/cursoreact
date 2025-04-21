import React from 'react'

const animalesSalvajes = ["leon", 'tigre', "lobo"]
const animalesDomesticos = ["gato", 'perro']
const animales = [...animalesSalvajes, ...animalesDomesticos] //esos tres puntos mescla las dos listas

// tambien se puede con objetos 
const motos = {
    cien: "nkd",
    docientos: "pulsar",
    trecientos: "Duke"
}

const carros = {
    cien: "aveo",
    docientos: "mazda",
    trecientos: "bmw"
}

const vehiculos = { ...motos, ...carros }


function SpreadOperator() {
    console.log(animales)
    console.log(vehiculos)

    return (
        <div>
            <h1>SpreadOperator</h1>
            <p>
                Este es un operador para mesclar listas
                <br />
                <code>const vehiculos = ...motos, ...carros
                </code></p>

            <p>
                Lista de motos: <br />
                <small>
                    {JSON.stringify(motos)}
                </small>
                <br />
                lista de carros: <br />
                <small>{JSON.stringify(carros)}</small>
            </p>

            <h3>Resultado de SpreadOperator en cada una de la listas</h3>
            <small>{JSON.stringify(vehiculos)}</small>
        </div>
    )
}

export default SpreadOperator
