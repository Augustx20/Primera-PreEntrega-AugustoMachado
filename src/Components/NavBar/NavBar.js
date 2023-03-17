import React from 'react'
import "./NavBar.css"
import Shop from '../Shop/Shop'

export const NavBar = () => {
  return (
 <nav className='Navigation'>
    <ul >
        <li>
        <a href='//'> Inicio</a>
        </li>
        <li className='List-ul'>
            <a href='//'>Recetas</a>
        </li>
        <li className='List-ul'>
            <a href='//'>Galeria</a>
        </li>
        <li className='List-ul'>
            <a href='//' >Nosotros</a>
        </li>
        <li className='List-ul'>
            <Shop/>
        </li>
    </ul>
 </nav>
  )
}

export default NavBar