import axios from "axios";
import { createContext, useEffect, useState } from "react";

// 🔧 1. Aquí faltaban los paréntesis para ejecutar `createContext()`
export const UserContext = createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data); // ✅ accede a `data`, no al objeto completo
    };
    obtenerUsuarios();
  }, []); // ✅ 2. Agrega dependencias vacías para que se ejecute solo una vez

  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
