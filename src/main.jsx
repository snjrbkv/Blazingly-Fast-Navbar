import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import { router } from "./router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { LanguProvider } from "./context/LangueContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguProvider>
      <RouterProvider router={router} />
    </LanguProvider>
  </React.StrictMode>
);
