import React from 'react';
import Header from './Header';
import '../stylesCss/Applicants.css';


function Applicants() {
  return (
    <section>
      <Header />
      <div className="container-applicants">
        <div className="aside-applicants">
          <div>
            <p>Bienvenido</p>
            {/* <p>{user}</p> */}
          </div>

          <a href="#" >Salir</a>
        </div>

        <div className="main-applicants">
          <h2>Postulacion</h2>
          <form>
            <label>Nombre:</label>
            <input type="text" id="name" name="name" />

            <label>Apellido:</label>
            <input type="text" id="surname" name="surname" />

            <label>Cedula:</label>
            <input type="text" id="dni" name="dni" />

            <label>Correo:</label>
            <input type="email" id="email" name="email" />

            <label>Cargo del postulante:</label>
            <input type="text" id="dni" name="dni" />

            <label>Rol a postular:</label>
            <input type="text" id="dni" name="dni" />
            <button>Agregar oferta</button>
          </form>

        </div>

      </div>

    </section>
  );
}

export default Applicants;
