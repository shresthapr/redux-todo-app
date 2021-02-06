import * as actionTypes from "../actions/actions";

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.SUBMIT:
    //   const { id, content } = action.payload;
    //   return {
    //     ...state,

    //     notes: [...state.notes, content],
    //     id: {
    //       ...state.id,
    //       id,
    //     },
    //   };
    case actionTypes.ADD:
      const newnote = action.value;
      console.log(newnote);
      return {
        ...state,
        notes: newnote,
      };
    case actionTypes.Submit:
      return {
        ...state,
        notes: state.notes,
      };
  }

  return state;
};

const initialState = {
  notes: [],
};

export default formReducer;
