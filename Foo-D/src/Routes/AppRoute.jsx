import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../Components/index";
import {
  Home,
  Dishes,
  Offers,
  About,
  Orders,
  Cart,
  Register,
  Support,
  BeacameAPartner,
  TermsOFService,
  Catagory,
  PageNotFound,
  NearByEats,
} from "../pages/index";

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
          path: "/Orders",
          element: <Orders />,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/NearByEats",
          element: <NearByEats/>,
        },
        {
          path: "/Register",
          element: <Register />,
        },
        {
          path: "/Beacame-A-Partner",
          element: <BeacameAPartner />,
        },
        {
          path: "/Catagory",
          element: <Catagory />,
        },
        {
          path: "/Terms-of-service",
          element: <TermsOFService />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Supports",
          element: <Support />,
        },
        {
          path: "*",
          element: <PageNotFound/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
