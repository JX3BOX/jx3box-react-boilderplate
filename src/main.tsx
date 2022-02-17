import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Jx3App from "./jx3-app";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Jx3App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
