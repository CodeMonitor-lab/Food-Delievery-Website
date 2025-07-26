import React from "react";
import { FaBurger } from "react-icons/fa6";

const ToggleHamMenu = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow cursor-pointer border border-amber-700 rounded p-2"
    >
      <FaBurger className="text-amber-600" size={24} />
    </button>
  );
};

export default ToggleHamMenu;
