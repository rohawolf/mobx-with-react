// src/stores/market.js
import { 
  action,
  computed,
  observable
} from 'mobx';

export default class MarketStore {
  @observable selectedItems = [
    {
      name: '포카칩',
      price: 1500,
      count: 2,
    },
    {
      name: '생수',
      price: 850,
      count: 1,
    },
  ];

  @action
  put = ( name, price ) => {
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      console.log(`${name} 장바구니 추가 `);
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  };

  @action
  take = (name) => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      console.log(`${name} 장바구니 삭제 `);
      this.selectedItems.remove(itemToTake);
    }
  };

  @computed
  get total() {
    console.log('calculating...');
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0);
  }

}

