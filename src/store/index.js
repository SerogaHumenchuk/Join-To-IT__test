import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootModule from '../modules/reducers/rootModule';

const store = createStore(rootModule, applyMiddleware(thunk));

export default store;
