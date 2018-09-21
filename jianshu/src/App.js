import React, { Component } from 'react';

/** 使用 react-redux */
import { Provider } from 'react-redux';

/** 引入 store.js */
import store from './store';

/** 引入组件 */
import Header from './common/header/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store ={ store }>
        <Header/>
      </Provider>
      </div>
    );
  }
}

export default App;
