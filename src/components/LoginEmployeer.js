import React from "react";
import '../stylesCss/LoginEmployeer.css'
import { useState } from "react";

function LoginEmployeer( { setLoginEmployeer } ) {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true)
      return
    }

    setError(false)

  }

  return (
    <section className="section-login">
      <div className="content">
        <h2>Iniciar Sesion - Empleadores</h2>

        <p className="eslogan">Encontrando las mentes brillantes que impulsan el futuro.</p>

        <form className="form-login" onSubmit={handleSubmit}>

          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} >
          </input>

          <label>Contraseña:</label>
          <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}></input>

          <button>Iniciar Sesion</button>
          <a href="#" onClick={() => setLoginEmployeer(false)}>Regresar</a>
        </form>

        {error && <p>Todos los campos son obligatorios</p>}
      </div>
    </section>
  );
}

export default LoginEmployeer;