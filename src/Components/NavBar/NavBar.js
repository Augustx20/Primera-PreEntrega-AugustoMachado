import React from 'react'
import "./NavBar.css"

export function NavBar ({children})  {
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
            {children}
        </li>
    </ul>
 </nav>
  )
}

export default NavBar