import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/error.jsx";
import ProductsPage from "./pages/products";
import ProductApiPage from "./pages/products_api";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ProductApiRTKPage from "./pages/products_api_rtk.jsx";
import ProductApiRTKUseReducerPage from "./pages/products_api_rtk_useReducer.jsx";
import { TotalpriceProvider } from "./context/CreateContext.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products-api",
    element: <ProductApiPage />,
  },
  {
    path: "/products-api-rtk",
    element: <ProductApiRTKPage />,
  },
  {
    path: "/products-api-rtk-use-reducer",
    element: <ProductApiRTKUseReducerPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TotalpriceProvider>
      <RouterProvider router={routers} />
    </TotalpriceProvider>
  </Provider>
);
