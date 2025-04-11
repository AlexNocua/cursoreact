import React, { useState } from 'react'

const RenderizadoCondicional = () => {
    // se establecen los estados para cada uno de los campos
    const [nombre, setNombre] = useState(false)
    const [apellido, setApellido] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    // Nombre y Apellido: Solo letras, mayúsculas o minúsculas, con tildes, entre 2 y 30 caracteres
    const regexNombreApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,30}$/;

    // Email: formato típico de correo electrónico
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Contraseña: mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#./])[A-Za-z\d@$!%*?&#./]{8,}$/;

    // crear funciones validadoras
    const valorNombre = () => {
        const nombre = document.getElementById("nombre").value
        if (nombre.trim()) { //esta linea con la funcion trim elimina los espacion en blanco al inicio y final del texto
            if (regexNombreApellido.test(nombre)) {//validar el nombre con la expresion regular
                console.log("Nombre correcto")
                setNombre(true)
            } else {
                console.log("Nombre Incorrecto")
                setNombre(false)
            }

        }
        console.log(nombre)
    }
    const valorApellido = () => {
        const apellido = document.getElementById("apellido").value
        console.log(apellido)
        if (apellido.trim())
            if (regexNombreApellido.test(apellido)) {
                setApellido(true)
                console.log("Apellido correcto")
            }

    }
    const valorEmail = () => {
        const email = document.getElementById("email").value
        console.log(email)
        if (email.trim()) {
            if (regexEmail.test(email)) {
                setEmail(true)
                console.log("email correcto")
            }
        }


    }
    const valorPassword = () => {
        const password = document.getElementById("password").value
        console.log(password)
        if (password.trim()) {
            if (regexPassword.test(password)) {
                setPassword(true)
                console.log("password correcto")
            }
        }
    }
    function enviar(e) {
        console.log(e)
        alert(`Formulario enviado ${e}`)
        e.preventDefault()

        // se deberia enviar la informacion??
        if (nombre === true && apellido === true && email === true && password === true) {
            console.log("los datos han sido validados correctamente")
        } else {
            console.log("envia los datos correctamente")
        }
        setTimeout(() => { window.location.reload() }, 5000)
    }
    return (
        <div>
            <h1>Renderizado condicional</h1>
            <form onSubmit={(e) => { enviar(e) }}>
                <div>
                    {/* //if ternario */}
                    {nombre === false ? <small>Escribe el nombre corectamete</small> : <small>El nombre esta correcto</small>}
                    <label htmlFor="nombre">Nombre</label>

                    <input type="text" name="nombre" id="nombre" onChange={valorNombre} />


                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" onChange={valorApellido} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={valorEmail} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={valorPassword} />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default RenderizadoCondicional;
