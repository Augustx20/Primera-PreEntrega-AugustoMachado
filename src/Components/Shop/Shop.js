import React from 'react';
import "./Shop.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Shop = () => {
  return (
    <div className='ShopClass'>
        <ShoppingCartIcon className='ShopStyle'/>
        <span className='SpanStyle'>3</span>
    </div>
  )
}

export default Shop