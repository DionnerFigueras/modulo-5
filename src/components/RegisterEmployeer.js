import React from "react";
import '../stylesCss/RegisterEmployeer.css';
import { useState } from "react";


function RegisterEmployeer( { setRegisterEmployeer } ) {
    const [nombre, setNombre] = useState("")
    const [pais, setPais] = useState("")
    const [correo, setCorreo] = useState("")
    const [dominio, setDominio] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombre === "" || pais === "" || correo === "" || dominio === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)
    }

    return (
        <section className="register-employeer">
            
            <div className="content-form">
                <h2>Regístrate como empresa y obtén candidatos ahora</h2>
                
                <form onSubmit={handleSubmit}>
                    <label>Nombre de la empresa:</label>
                    <input 
                        type="text" id="nameCompany" name="nameCompany" value={nombre} onChange={e => setNombre(e.target.value)}
                     />

                    <label>Pais:</label>
                    <input 
                    type="text" id="state" name="state" value={pais} onChange={e => setPais(e.target.value)} />

                    <label>Correo de empresa:</label>
                    <input 
                    type="email" id="email" name="email" value={correo} onChange={e => setCorreo(e.target.value)} />

                    <label>Sitio web de la empresa:</label>
                    <input type="text" id="domain-name" name="domain-name" placeholder="http://" value={dominio} onChange={e => setDominio(e.target.value)}/>

                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" value={contraseña} onChange={e => setContraseña(e.target.value)} />

                    <button>Registrarse</button>

                    <a href="#" onClick={() => setRegisterEmployeer(false)}>Regresar</a>

                </form>

                {error && <p>Todos los campos son obligatorios</p>}

            </div>
        </section>
    );
}

export default RegisterEmployeer;