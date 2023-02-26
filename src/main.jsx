import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/iranyekanwebthinfanum.ttf";
import { Provider } from "react-redux";
import { store } from "./stats/states";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
