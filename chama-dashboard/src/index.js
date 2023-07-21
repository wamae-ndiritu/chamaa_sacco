import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { ScrollProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>
);