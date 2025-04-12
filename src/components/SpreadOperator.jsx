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
        </div>
    )
}

export default SpreadOperator
