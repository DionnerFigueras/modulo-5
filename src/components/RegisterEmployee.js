import React from "react";
import '../stylesCss/RegisterEmployee.css';
import { useState } from "react";


function RegisterEmployee({ setRegisterEmployee }) {
  const [nombre, setNombre] = useState("");
  const [sNombre, setSNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sApellido, setSApellido] = useState("");
  const [contraseña, setContraseña] = useState("")
  const [correo, setCorreo] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || sNombre === "" || apellido === "" || sApellido === "" || correo === "" || contraseña === "") {
      setError(true)
      return

    }else {
      setRegisterEmployee(true)
    }

    setError(false)

  };

  return (
    <section className="register-employee">
      <div className="content-form">
        <h2>Crea un nueva cuenta - Empleado</h2>

        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" id="name" name="name" value={nombre} onChange={e => setNombre(e.target.value)} />

          <label>Segundo Nombre:</label>
          <input type="text" id="middle-name" name="middle-name" value={sNombre} onChange={e => setSNombre(e.target.value)} />

          <label>Apellido:</label>
          <input type="text" id="last-name" name="last-name" value={apellido} onChange={e => setApellido(e.target.value)} />

          <label>Segundo Apellido:</label>
          <input type="text" id="second-surname" name="second-surname" value={sApellido} onChange={e => setSApellido(e.target.value)} />

          <label>Correo:</label>
          <input type="email" id="email" name="email" value={correo} onChange={e => setCorreo(e.target.value)} />

          <label>Contraseña:</label>
          <input type="password" id="password" name="password" value={contraseña} onChange={e => setContraseña(e.target.value)} />

          <button>Registrarse</button>
          <a href="#" onClick={() => setRegisterEmployee(false)}>Regresar</a>
        </form>

        {error && <p>Todos los campos son obligatorios</p>}

      </div>
    </section>
  );
}

export default RegisterEmployee;