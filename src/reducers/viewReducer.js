import * as actionType from "../actions/actions";
const viewReducer = (state = [], action) => {
  switch (action.types) {
    case actionType.LOAD:
      return action.data;
  }
  return state;
};

// const initialState = {
//   allIds: [],
//   byIds: {},
// };
export default viewReducer;
