import React from "react";
import "./view.css";
import { useSelector, useDispatch } from "react-redux";
import { STRIKE } from "../actions/actions";

const View = () => {
  const mynotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({
    type: STRIKE,
    id: id,
  });
  return (
    <div className="displayArea">
      <h3>
        Things you have on your <b>ToDo</b> List
        <p>
          {mynotes.map((item) => (
            <li
              key={item.id}
              onClick={() => dispatch(toggleTodo(item.id))}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {" "}
              {item.text}
              {item.completed ? "👌" : "👋"}
            </li>
          ))}
        </p>
      </h3>
    </div>
  );
};

export default View;
