import getpost from "../getPost/getpost";

export const ADD = "ADD";
export const STRIKE = "STRIKE";
export const LOAD = "LOAD";

let nextId = 0;
// export const AddTodo = (content) => ({
//   type: ADD,
//   payload: {
//     id: ++nextId,
//     text: content,
//   },
// });
export const AddTodo = (content) => {
  return async (dispatch) => {
    const newNote = await getpost.addNew(content);
    dispatch({
      type: ADD,
      data: newNote,
    });
  };
};

export const loadAll = () => {
  return async (dispatch) => {
    const notes = await getpost.getAll();
    dispatch({ type: LOAD, data: notes });
  };
};
