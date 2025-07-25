import React from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const HederSideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={onClose} className="text-2xl">
            <IoMdClose />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/dishes" onClick={onClose}>Dishes</Link>
          <Link to="/orders" onClick={onClose}>Orders</Link>
          <Link to="/offers" onClick={onClose}>Offers</Link>
        </nav>
      </aside>
    </>
  );
};

export default HederSideMenu;
