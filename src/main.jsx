import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import AuthProvides from "./Providers/AuthProvides";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvides>
      <RouterProvider router={router} />
    </AuthProvides>
  </React.StrictMode>
);
