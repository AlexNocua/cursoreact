import React from 'react'
import { BrowserRouter, Routes, Route, Link, Redirect, Navigate } from 'react-router-dom';
import Componente1 from './Componente1';
import Componente2 from './Componente2'
import Componente3 from './Componente3'
import RutasDinamicas from './RutasDinamicas';
// instalar el paquete " npm install router-dom"
const Padre = () => {
    return (
        <div>
            <h2>Rutas</h2>
            <div>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Componente1 />} />
                        <Route path="/2" sensitive element={<Componente2 />} />
                        <Route path="/3" element={<Componente3 />} />
                        <Route path="/4" element={
                            <h1>Componente 4</h1>
                        } />
                        {/* <NavLink activeStyle={{ color: 'red' }} to="/2" ></NavLink> */}
                        {/* es mas eficiente */}
                        <Route path="/ruta_dinamica/:id" element={<RutasDinamicas />}></Route>

                        <Route path='/*' element ={<Navigate to="/"/>}></Route>

                        {/* <Link to="/privado">Privado</Link> */}
                    </Routes>
                </BrowserRouter>
                {/* <a href="/2">A componente 2</a> */}
            </div>
        </div>
    )
}

export default Padre
