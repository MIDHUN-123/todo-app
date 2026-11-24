import React from 'react';
import { useState } from 'react';
import { FaCheck,FaMoon,FaSun } from 'react-icons/fa';
import './Nav.css';


const Nav = () => {
  const [Darkmode,setDarkmode]=useState(true);
  const toggleTheme=()=>{
    setDarkmode(!Darkmode);
    document.body.classList.toggle('light-mode');

  }
  return (
    <header className='todo-header'>
      <div className='header-brand'>
        <div className='logo-box'>
          <FaCheck />

        </div>
        <div className='header-text'>
          <h1>Todo<span>App</span></h1>
          <p>samall steps . Big results.</p>

        </div>

      </div>
      <button className={`theme-toggle ${Darkmode ? 'dark' : 'light'} `}
        onClick={toggleTheme}
        aria-label='Toggle Theme'
      >
        <span className='theme-icon'>
          {Darkmode ? <FaMoon /> : <FaSun />}
        </span>
        <span className='sun-icon'>
          {Darkmode ? <FaSun /> : <FaMoon />}
        </span>

      </button>
    </header>
  )
}

export default Nav