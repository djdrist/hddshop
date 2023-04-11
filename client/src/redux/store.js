import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';
import searchReducer from './searchRedux';

const reducers = {
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
