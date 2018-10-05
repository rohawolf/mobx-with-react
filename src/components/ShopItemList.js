// src/components/ShopItemList.js
import React from 'react';
import { ShopItem } from '../components';

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

const ShopItemList = () => {
  const itemList = items.map(item => <ShopItem {...item} key={item.name} />);
  return <div>{itemList}</div>;
}

export default ShopItemList;