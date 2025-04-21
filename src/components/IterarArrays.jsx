import React from 'react'


const animales = ["gato", 'perro', 'pajaro']
const usuarios = [
    {
        nombre: "Camila",
        apellido: "Gómez",
        edad: 28,
        correo: "camila.gomez@example.com",
        esAdmin: false
    },
    {
        nombre: "Carlos",
        apellido: "Ramírez",
        edad: 32,
        correo: "carlos.ramirez@example.com",
        esAdmin: true
    },
    {
        nombre: "Laura",
        apellido: "Martínez",
        edad: 24,
        correo: "laura.martinez@example.com",
        esAdmin: false
    },
    {
        nombre: "Andrés",
        apellido: "López",
        edad: 30,
        correo: "andres.lopez@example.com",
        esAdmin: true
    }
];

const IterarArrays = () => {
    return (
        <div>
            <h1>Itertacion de arrays y Objetos</h1>
            <ul>
                {animales.map(animal => (
                    <li>{animal}</li>
                ))}
            </ul>
            <h2>Iteracion de un objeto</h2>
            <ol>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.apellido}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default IterarArrays
