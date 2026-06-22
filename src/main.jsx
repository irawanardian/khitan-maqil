import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GeneratorPage from "./generator/GeneratorPage.jsx";
import "./index.css";

const isGeneratorPage = window.location.pathname.startsWith("/generator");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isGeneratorPage ? <GeneratorPage /> : <App />}
  </React.StrictMode>
);