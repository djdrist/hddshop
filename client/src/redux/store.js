import { createStore, combineReducers, compose } from 'redux';
import initialState from './initialState';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';

const reducers = {
  products: productsReducer,
  cart: cartReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
