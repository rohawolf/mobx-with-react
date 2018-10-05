// src/stores/market.js
import { 
  action,
  computed,
  observable
} from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
  }
  
  @action
  put = ( name, price ) => {
    const { number } = this.root.counter;
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      console.log(`${name} 장바구니 추가 `);
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      return;
    }
    exists.count += number;
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

