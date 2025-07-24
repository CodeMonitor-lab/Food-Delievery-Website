import React from "react";
import { Header, Footer } from "../index";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-[calc(100vh-160px)] bg-gray-100 px-1 md:px-4 lg:px-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
