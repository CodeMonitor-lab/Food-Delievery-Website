import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-amber-800 flex items-center gap-1"
          : "text-black hover:text-amber-800 transition flex items-center gap-1"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
