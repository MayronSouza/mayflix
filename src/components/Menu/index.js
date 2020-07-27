import React from 'react';

import Logo from '../../assets/img/logo_mayflix.png'
import './Menu.css'

function Menu() { 
  return (
    <>
      <nav className='Menu'>
        <a href='/'>
          <img className='Logo' src={ Logo } alt='Logo MayFlix'/>
        </a>
      </nav>
    </>
  )
}

export default Menu;