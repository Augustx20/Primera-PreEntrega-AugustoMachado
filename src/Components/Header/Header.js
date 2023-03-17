//rafce

import React from 'react'
import "./header.css";

const Header = (props) => {
  return (
    <div className='header'>
      <div>
        <h1 className='TituloHeader'>Mega Dulce</h1></div>

      <div className='DivLista'>
        <p className='ListaP'>Tus mejores recetas, postres los encontras aqui.</p>
        <li>Preparacion de comidas casera y saludables</li>
        <li>Logrando momentos diferentes y unicos</li>
        <li>Trabajando en familia y con amor</li>
        <li>Convertite en un cocinero como nosotros</li>
      </div>
    </div>
  )
}

export default Header

//Usar props para poder ahorrar codigo y utilizar situaciones en diferentes casos