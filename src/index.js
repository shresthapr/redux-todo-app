import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import formReducer from "./reducers/formReducer";
// import viewReducer from "./reducers/viewReducer";
// import { createStore, combineReducers } from "redux";
import store from "./store/store";

// const rootReducer = combineReducers({
//   viw: viewReducer,
//   frm: formReducer,
// });
// const mystore = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
