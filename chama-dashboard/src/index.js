import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { ScrollProvider } from "./context/context";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </Provider>
);
