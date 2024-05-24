import React from "react";
import '../stylesCss/LoginForm.css'
import { useState } from "react";
import Applicants from "./Applicants";

function LoginEmployee({ setLoginEmployee, setApplicants }) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true)
      return

    }else {
      setLoginEmployee(false)
      setApplicants(true)
      
    }

    setError(false)
  };

  return (
    <section className="section-login">
      <div className="content">
        <h2>Iniciar Sesion - Empleadoss</h2>

        <p className="eslogan">¡Haz que los trabajos toquen a tu puerta!</p>

        <form className="form-login" onSubmit={handleSubmit}>

          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} >
          </input>

          <label>Contraseña:</label>
          <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}></input>

          <button>Iniciar Sesion</button>
          <a href="#" onClick={() => setLoginEmployee(false)}>Regresar</a>
        </form>

        {error && <p>Todos los campos son obligatorios</p>}
      </div>
    </section>
  );
}

export default LoginEmployee;