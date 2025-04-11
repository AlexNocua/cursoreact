import React, { useState } from 'react'

const Eventos = () => {
    const [colorFocus, setColorFocus] = useState("red")

    const colorOnFocus = { color: colorFocus }

    // Función para onFocus
    const cambiarColor = () => {
        setColorFocus(prev => prev === "red" ? "black" : "red")
        console.log("Input en foco (onFocus)")
    }

    const handleBlur = () => {
        console.log("Saliste del input (onBlur)")
    }

    const handleChange = (e) => {
        console.log("Cambio detectado en input (onChange):", e.target.value)
    }

    const handleClick = () => {
        console.log("Click detectado (onClick)")
    }

    const handleDoubleClick = () => {
        console.log("Doble click detectado (onDoubleClick)")
    }

    const handleKeyDown = (e) => {
        console.log("Tecla presionada (onKeyDown):", e.key)
    }

    const handleKeyPress = (e) => {
        console.log("Tecla presionada (onKeyPress):", e.key)
    }

    const handleMouseDown = () => {
        console.log("Botón del mouse presionado (onMouseDown)")
    }

    const handleMouseOver = () => {
        console.log("Mouse pasó por encima (onMouseOver)")
    }

    const handleMouseLeave = () => {
        console.log("Mouse salió del elemento (onMouseLeave)")
    }

    return (
        <div>
            <h1>Este es el script de eventos</h1>

            <input
                type="text"
                placeholder="Prueba los eventos"
                style={colorOnFocus}
                onFocus={cambiarColor}
                onBlur={handleBlur}
                onChange={handleChange}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPress}
                onMouseDown={handleMouseDown}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    )
}

export default Eventos
