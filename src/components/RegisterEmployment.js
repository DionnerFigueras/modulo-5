import React from "react";
import '../stylesCss/RegisterEmployment.css';

function RegisterEmployment() {
  return (

    <section className="register-employment">
      <div className="container">
        <div className="aside">
          <p>Bienvenido</p>
          <a href="#">Regresar</a>
        </div>

        <div className="main-employment">
          <h2>Crea tu oferta de empleo</h2>
          <form>
            <label>Area:</label>
            <input type="text" id="area" name="area" />

            <label>Puesto:</label>
            <input type="text" id="job" name="job" />

            <label>Nivel de experiencia:</label>
            <input type="text" id="experiencie" name="experiencie" />

            <label>Modalidad:</label>
            <input type="text" id="modality" name="modality" />

            <label>Salario</label>
            <input type="number" id="salary" name="salary" />

            <button>Agregar oferta</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterEmployment;