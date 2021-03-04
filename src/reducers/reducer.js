import * as actionTypes from "../actions/actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.data];
    case actionTypes.LOAD:
      return action.data;
    case actionTypes.STRIKE:
      const markStrike = state.find((item) => item.id === action.id);
      const newlist = {
        ...markStrike,
        completed: !markStrike.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : newlist));
  }
  return state;
};

export default reducer;
