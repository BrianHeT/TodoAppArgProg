import { useState, } from "react";
import { Navigate, Switch, Router, Link, NavLink } from "react-router-dom";


export default function Register() {
    const [Usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState ("")

    return(
        
        <form className="form">
            <h1>Registro</h1>

            <label>Nombre</label>
            <input type="text" />

            <label>Email</label>
            <input type="text" />

            <label>Usuario</label>
            <input type="text" value={Usuario} onChange={(e) => setUsuario(e.target.value)}/>

            <label>Contraseña</label>
            <input type="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>

            <Link to={`/`}>
                <button>Crear Cuenta</button></Link>
        </form>
    
    );
}