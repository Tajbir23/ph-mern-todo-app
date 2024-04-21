import { RouterProvider } from "react-router-dom";
import App from "./App";
import { routes } from "./main";
import { createContext, useState } from "react";

export const UpdateContext = createContext();

const Root = () => {
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false)
  return (
    <UpdateContext.Provider value={{data,setData, modal, setModal}}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </UpdateContext.Provider>
  );
};

export default Root;
