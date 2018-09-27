import React, { Component } from 'react';

/** 使用 react-redux */
import { Provider } from 'react-redux';

/** 使用路由 react-router-dom */
import { BrowserRouter, Route } from 'react-router-dom';

/** 引入 store.js */
import store from './store';

/** 引入组件 */
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store ={ store }>
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component= { Home } ></Route>
              <Route path='/detail' exact component= { Detail } ></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      </div>
    );
  }
}

export default App;
