import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users.jsx";
import 'react-toastify/dist/ReactToastify.css';
import Root from "./Root.jsx";



export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: (() => fetch('https://ph-mern-todo-app.onrender.com/users'))
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
