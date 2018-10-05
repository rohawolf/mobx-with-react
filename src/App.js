import React, { Component } from 'react';
import { 
  Counter,
  SuperMarket
} from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
      </div>
    );
  }
}

export default App;
