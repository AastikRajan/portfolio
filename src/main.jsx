import React from "react";
import ReactDOM from "react-dom"; // Use the old import for React 16
import App from "./App";
import "./index.css";

// Render the App using ReactDOM.render() (works with React 16)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
