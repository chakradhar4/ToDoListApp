import * as actionTypes from "../actions/type";

const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default todosReducers;
