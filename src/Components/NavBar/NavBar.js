import React from 'react'
import "./NavBar.css"

import { Link } from 'react-router-dom'

export function NavBar ({children})  {
  return (
 <nav className='Navigation'>
    <ul >
        <Link className='List-ul' to="/">Home</Link>
        <Link className='List-ul' to="/Contact">Contact</Link>
        <Link className='List-ul' to="/Galery">Galery</Link>
        <Link className='List-ul'>{children}</Link>
    </ul>
 </nav>
  )
}

export default NavBar