const createActionName = (actionName) => `app/products/${actionName}`;
const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const getAllProducts = (state) => state.products;
export const getProductById = (state, id) =>
  state.products.find((product) => product.id === id);

export const loadProducts = (payload) => ({ payload, type: LOAD_PRODUCTS });

const productsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default productsReducer;
