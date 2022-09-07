import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>
);
