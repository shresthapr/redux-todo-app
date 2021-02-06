import React, { useState } from "react";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { AddTodo } from "../actions/actions";

const Form = () => {
  const [input, setInput] = useState("");

  const updateInput = (content) => {
    setInput(content);
  };

  const mynotes = useSelector((state) => state.frm.notes);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <label htmlFor="input field">
          {" "}
          <input
            type="text"
            id="insertnote"
            name="todolist"
            placeholder="Add your note"
            onChange={(e) => updateInput(e.target.value)}
          ></input>
        </label>
        <Button
          type="submit"
          id="addBtn"
          variant="dark"
          onClick={() => dispatch(AddTodo(input))}
        >
          Add Note
        </Button>
      </form>
      <p> mynotes= {mynotes}</p>
    </div>
  );
};

export default Form;
