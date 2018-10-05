// src/components/ShopItemList.js
import React from 'react';
import { ShopItem } from '../components';
import {
  inject,
  observer,
} from 'mobx-react';

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

const ShopItemList = ({ onPut }) => {
  const itemList = items.map(item => (
    <ShopItem 
      key={item.name}
      name={item.name} 
      price={item.price}
      onPut={onPut} 
    />
  ));
  return <div>{itemList}</div>;
}

export default inject(
  ({ market }) => ({
    onPut: market.put,
  })
)(observer(ShopItemList));