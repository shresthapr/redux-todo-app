import * as actionTypes from "../actions/actions";

const formReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.data];
  }
  return state;
};

export default formReducer;
