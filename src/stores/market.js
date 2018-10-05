// src/stores/market.js
import { 
  action,
  computed,
  observable
} from 'mobx';

export default class marketStore {
  @observable selectedItems = [];

  @action
  put = ({ name, price}) => {
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
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
  take = name => {
    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItems.remove(itemToTake);
    }
  };

  @computed
  get total() {
    console.log('calculating...');
    return this.selectedItems.reduce((prev, curr) => {
      return prev + curr.price * curr.count
    }, 0);
  }

}

