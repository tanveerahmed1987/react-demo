import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";

import CounterStore from "./store/CounterStore";

ReactDOM.render(
  <Provider store={CounterStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
