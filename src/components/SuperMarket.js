// src/components/SuperMarket.js
import React from 'react';
import { 
  BasketItemList,
  ShopItemList,
  SuperMarketTemplate,
  TotalPrice,
} from '../components';

const SuperMarket = () => {
  return (
    <SuperMarketTemplate 
      items={<ShopItemList />} 
      basket={<BasketItemList />} 
      total={<TotalPrice />}
    />
  );
}

export default SuperMarket;