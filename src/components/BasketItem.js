// src/components/BasketItem.js
import React from 'react';
import { observer } from 'mobx-react';
import './BasketItem.css';

const BasketItem = ({ item, onTake }) => {
  const { name, price, count } = item;
  return (
    <div className='BasketItem'>
      <div className='name'>{name}</div>
      <div className='price'>{price}원</div>
      <div className='count'>{count}</div>
      <div 
        className='return'
        onClick={() => onTake(name)}
      >갖다놓기</div>
    </div>
  );
};

export default observer(BasketItem);