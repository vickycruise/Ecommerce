import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

import Cart from "../pages/Cart";
import ErrorPage from "../components/Layout/ErrorPage";
import ProductDetailse from "../pages/ProductDetailse";
import Orders from "../pages/Orders";
import Dashboard from "../pages/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "product-details",
        element: <ProductDetailse />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
        // loader: redirectIfUser,
      },
      {
        path: "logout",
        element: <div>Logout Page</div>, // Add appropriate element or logic here
      },
    ],
  },
]);

export default Router;
