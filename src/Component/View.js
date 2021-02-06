import React from "react";
import "./view.css";
import { useSelector, useDispatch } from "react-redux";
import { Submit } from "../actions/actions";

const View = () => {
  const currentview = useSelector((state) => state.frm.notes);

  const dispatch = useDispatch();
  return (
    <div className="displayArea">
      <h3>
        Things you have on your <b>ToDo</b> List
      </h3>
      <p>{currentview}</p>
      <button onCick={() => dispatch()}> Show Notes</button>
      <div>
        {currentview.map((item) => (
          <li key={item.id} onClick={() => dispatch()}>
            {item.value}
          </li>
        ))}
      </div>
    </div>
  );
};

export default View;
