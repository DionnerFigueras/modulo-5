import React, { useRef } from "react";
import '../stylesCss/Home.css';
import logo from '../images/Logo.png';
import { useState } from "react";

function Home({ setLoginEmployee, setLoginEmployeer, setRegisterEmployee, setRegisterEmployeer }) {
  const menus = ['Empleado', 'Empresa'];
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const menuRefLogin = useRef();
  const aRefLogin = useRef();
  const menuRefRegister = useRef();
  const aRefRegister = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRefLogin.current && e.target !== aRefLogin.current) {
      setOpenLogin(false);

    }

    if (e.target !== menuRefRegister.current && e.target !== aRefRegister.current) {
      setOpenRegister(false);
    }
  });

  return (
    <div className="content-home">
      <section className="App-header">

        <div className='App-logo'>
          <img src={logo} className="App-logo-img" alt="logo" title='Logo' />
          <p>Code Ninjas</p>
        </div>

        <div className='App-login'>

          <a className='button-login' href='#' onClick={() => setOpenLogin(!openLogin)} ref={aRefLogin}>
            Iniciar Sesion
          </a>
          {openLogin &&
            <div className="content-list-login" ref={menuRefLogin}>
              <ul>
                <li key='employee' onClick={() => setLoginEmployee(true)}>Empleado</li>
                <li key='employeer' onClick={() => setLoginEmployeer(true)}>Empresa</li>
              </ul>
            </div>
          }

          <a className='button-register' href='#' onClick={() => setOpenRegister(!openRegister)} ref={aRefRegister} >
            Registrarse
          </a>

          {openRegister &&
            <div className="content-list-register" ref={menuRefRegister} >
              <ul>
                <li key='employee' onClick={() => setRegisterEmployee(true)}>Empleado</li>
                <li key='employeer' onClick={() => setRegisterEmployeer(true)}>Empresa</li>
              </ul>
            </div>
          }

        </div>

      </section>

      <section className='main'>
        <div className='content'>
          <h1>Deja que los empleos llegen a ti</h1>
          <p>Oportunidades ilimitadas para profesionales apasionados.</p>
        </div>
      </section>

      <section className='works'>
        <p className='p-main'>Filtramos los empleos para ti. Solo las mejores empresas.</p>
        <div className='content-img'>
          <img src={require('../images/Accenture.png')} alt="Accenture" />
          <img src={require('../images/Deloitte.png')} alt="Deloitte" />
          <img src={require('../images/Mercado-libre.png')} alt="Mercado Libre" />
          <img src={require('../images/Santander.png')} alt="Santander" />
          <img src={require('../images/Spotify.png')} alt="Spofity" />
          <img src={require('../images/Uber.png')} alt="Uber" />
        </div>
        <p className='p-other'>Miles de empresas y startups de todo el mundo están buscando talentos como tú.</p>
      </section>
    </div>
  );
}

export default Home;

// {
// menus.map((menu) => (
// <li key={menu} onClick={console.log(menu)/* () => setOpenLogin(false) */}>{menu}</li>
// ))
// }