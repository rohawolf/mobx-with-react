// src/components/ShopItem.js
import React from 'react';
import './ShopItem.css';

const ShopItem = ({ name, price }) => {
  return (
    <div className='ShopItem'>
      <h4>{name}</h4>
      <div>{price}</div>
    </div>
  );
}

export default ShopItem;