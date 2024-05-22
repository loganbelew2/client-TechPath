import App from "./App.tsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client"
import React from "react";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
)

