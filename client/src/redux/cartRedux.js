const createActionName = (actionName) => `app/cart/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const DELETE_PRODUCT = createActionName('DELETE_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');

export const getCart = (state) => state.cart;

export const addCartProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const deleteCartProduct = (payload) => ({
  payload,
  type: DELETE_PRODUCT,
});
export const editCartProduct = (payload) => ({ payload, type: EDIT_PRODUCT });

const cartReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, action.payload];
    case DELETE_PRODUCT:
      return statePart.filter((product) => product.id !== action.payload.id);
    case EDIT_PRODUCT:
      return statePart.map((product) =>
        product.id === action.payload.id ? action.payload : product,
      );
    default:
      return statePart;
  }
};

export default cartReducer;
