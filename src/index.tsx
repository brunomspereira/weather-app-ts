import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from "react";
import store from "./store";
import "../node_modules/bulma/css/bulma.min.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
