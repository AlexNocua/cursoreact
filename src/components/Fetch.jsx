import React, { useEffect, useState } from 'react'

const Fetch = () => {
    // creacion de un hook
    const [users, setUsers] = useState([])
    useEffect(() => {
        const cargarUsuarios = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)
            console.log(data)
        }
        cargarUsuarios()
    }, [])


    return (
        <div>
            <h3>Peticiones HTTP con Fetch</h3>
            <ul>
                {
                    users.map(user => (
                        <>
                            <li key={user.id}>
                                nombre : {user.name}
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}

export default Fetch
