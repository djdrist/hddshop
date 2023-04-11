const createActionName = (actionName) => `app/search/${actionName}`;
const EDIT_SEARCH = createActionName('EDIT_SEARCH');

export const getSearchParams = (state) => state.search;

export const editSearch = (payload) => ({ payload, type: EDIT_SEARCH });

const searchReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case EDIT_SEARCH:
      return { ...statePart, ...action.payload };
    default:
      return statePart;
  }
};

export default searchReducer;
