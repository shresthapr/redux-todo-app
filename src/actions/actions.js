export const ADD = "ADD";
export const SUBMIT = "SUBMIT";
export const STRIKE = "STRIKE";

export const AddTodo = (input) => ({
  type: ADD,
  value: input,
});

let nextTodoId = 0;
export const Submit = (content) => ({
  type: SUBMIT,
  payload: {
    id: ++nextTodoId,
    content,
  },
});
export const Strike = () => ({
  type: STRIKE,
});
