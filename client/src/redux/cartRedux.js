const createActionName = (actionName) => `app/cart/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const SET_CART = createActionName('SET_CART');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');
const DELETE_CART = createActionName('DELETE_CART');

export const getCart = (state) => state.cart;

export const addCartProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const setCart = (payload) => ({ payload, type: SET_CART });
export const deleteCartProduct = (payload) => ({
  payload,
  type: DELETE_PRODUCT,
});
export const editCartProduct = (payload) => ({ payload, type: EDIT_PRODUCT });
export const deleteCart = () => ({ type: DELETE_CART });

export const loadCartRequest = () => {
  return async (dispatch) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(setCart(cart));
    }
  };
};

export const addCartProductRequest = (product) => {
  return async (dispatch, getState) => {
    dispatch(addCartProduct(product));
    const cart = getCart(getState());
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};

export const editCartProductRequest = (product) => {
  return async (dispatch, getState) => {
    dispatch(editCartProduct(product));
    const cart = getCart(getState());
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};

export const deleteCartProductRequest = (product) => {
  return async (dispatch, getState) => {
    dispatch(deleteCartProduct(product));
    const cart = getCart(getState());
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};

const cartReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      statePart.find((product) => product.id === action.payload.id)
        ? (statePart = statePart.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ))
        : (statePart = [...statePart, action.payload]);
      return statePart;
    case DELETE_PRODUCT:
      return statePart.filter((product) => product.id !== action.payload.id);
    case EDIT_PRODUCT:
      return statePart.map((product) =>
        product.id === action.payload.id ? action.payload : product,
      );
    case DELETE_CART:
      return [];
    case SET_CART:
      return action.payload;
    default:
      return statePart;
  }
};

export default cartReducer;
