import CounterStore from './counter';
import MarketStore from './market';

export default class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

