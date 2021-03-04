import "./App.css";
import Form from "./Component/Form";
import View from "./Component/View";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAll } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAll());
  }, [dispatch]);
  return (
    <div className="App">
      <h1> Your todo App says Hello </h1>
      <Form />
      <View />
    </div>
  );
}

export default App;
