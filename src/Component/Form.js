import React from "react";
import "./form.css";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { AddTodo } from "../actions/actions";

const Form = () => {
  const dispatch = useDispatch();

  const handleAddTo = async (e) => {
    e.preventDefault();
    const inputValue = e.target.todolist.value;
    console.log(inputValue);
    e.target.todolist.value = "";
    dispatch(AddTodo(inputValue));
  };

  return (
    <div>
      <form onSubmit={handleAddTo}>
        <label htmlFor="input field">
          {" "}
          <input
            type="text"
            id="insertnote"
            name="todolist"
            placeholder="Add your note"
          ></input>
        </label>
        <Button type="submit" id="addBtn" variant="dark">
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default Form;
