import React from 'react'
import Hijo from './Hijo'

const Padre = () => {
    const nombres = ['Alex', 'Eduardo', 'Nocua', 'Sema']
    return (
        <div>
            <h1> Iteracion de componentes</h1>
            <ul>
                {
                    nombres.map(nombre => {
                        return (<>
                            <Hijo listaNombres={nombre}></Hijo>
                        </>)
                    })
                }
            </ul>
        </div>
    )
}

export default Padre
