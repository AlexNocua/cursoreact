import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Axios = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const cargarData = async () => {
            const response = await axios("https://jsonplaceholder.typicode.com/users")
            console.log(response.data)
            setUsers(response.data)
        }
        cargarData()
    }, [])

    return (
        <div>
            <h3>Peticiones con Axios</h3>
            <ol>
                {
                    users.map(user => (
                        <li key={user.id}>
                            nombre: {user.name}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Axios
