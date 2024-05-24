import React from 'react';
import logo from '../images/Logo.png'
import '../stylesCss/Header.css';

function Header(props) {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} className="header-img" alt="logo" title='Logo' />
        <p>Code Ninjas</p>
      </div>
      <div className='header-name'>{props.nameUser}</div>
    </div>
  );
}

export default Header;