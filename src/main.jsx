import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./stores/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Example from "./components/Example.jsx";
import CardAPI from "./components/CardAPI.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ProvaRedux from "./components/ProvaRedux.jsx";
import Card from "./components/Card.jsx";
import SingleCard from "./components/SingleCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children: [],
  },
  {
    path: "/:cardID",
    element: <SingleCard></SingleCard>,
  },
  {
    path: "/cardAPI",
    element: <CardAPI></CardAPI>,
  },
  {
    path: "/example",
    element: <Example></Example>,
  },
  {
    path: "/loginLogout",
    element: <LoginForm></LoginForm>,
  },
  {
    path: "/contatore",
    element: <ProvaRedux></ProvaRedux>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
