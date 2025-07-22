import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../Components/index";
import { Home, Dishes, Offers, About } from "../pages/index";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Dishes",
          element: <Dishes />,
        },
        {
          path: "/Offers",
          element: <Offers />,
        },
        {
          path: "/About",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />
};

export default AppRoute;
