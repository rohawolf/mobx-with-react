import { action, observable } from 'mobx';


export default class CounterStore {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  }

  @action
  decrease = () => {
    this.number--;
  }
}