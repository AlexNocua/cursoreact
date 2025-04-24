import React, { useContext } from 'react'
import { UserContext } from './Context'

const ListaUsuarios = (props) => {
    const { users } = useContext(UserContext)
    console.log(users)
    return (
        <div>
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>

        </div>
    )
}

export default ListaUsuarios
