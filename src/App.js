import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
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
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}

export default App;
