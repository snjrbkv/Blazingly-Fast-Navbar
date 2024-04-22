import { createBrowserRouter } from "react-router-dom";
import App from "./App";
//import { children } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);
