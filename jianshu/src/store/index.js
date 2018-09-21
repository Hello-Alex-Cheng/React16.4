import { createStore, compose } from 'redux';

import reducer from './reducer';

/** 使用 Redux DevTools Extension 工具，管理 redux */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer ,composeEnhancers());

export default store;