import React from 'react'

const IterarKeys = () => {
    const animal = {
        'nombre': 'gato',
        'edad': '23',
        'dueño': 'alex',
    }
    // de la siguente manera se recuperan cada una de las llaves de un objeto
    const keys = Object.keys(animal)
    return (
        <div>
            <h1>Iterar Keys</h1>
            <ol>
                {
                    keys.map(k => {
                        return (
                            <li>
                                {k}: {animal[k]}
                            </li>
                        )
                    })
                }

            </ol>

        </div>
    )
}

export default IterarKeys
