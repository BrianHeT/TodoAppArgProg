import { Navigate, Switch, Router, Link, NavLink } from "react-router-dom";
import { useState } from "react";


export default function Login() {
    const [Usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState ("")
   
    return(
       
            <form className="form">
                <h1>Login</h1>
                <label>Usuario</label>
                <input type="text" value={Usuario} onChange={(e) => setUsuario(e.target.value)}/>

                <label>Contraseña</label>
                <input type="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>


                <Link to={`/Inicio`}>
                <button>Iniciar Sesion</button></Link> 
            </form>
       
    );
}