// src/components/SuperMarket.js
import React from 'react';
import { 
  BasketItemList,
  ShopItemList,
  SuperMarketTemplate,
} from '../components';

const SuperMarket = () => {
  return (
    <SuperMarketTemplate 
      items={<ShopItemList />} 
      basket={<BasketItemList />} 
    />
  );
}

export default SuperMarket;