import { combineReducers } from 'redux';

import quotesReducer from './quotesReducer';
import randomQouteReducer from './randomQouteReducer';
import randomQouteByAuthorReducer from './randomQouteByAuthorReducer';

export default combineReducers({
  qoutesCategories: quotesReducer,
  randomQoute: randomQouteReducer,
  randomAuthorQoute: randomQouteByAuthorReducer,
});
