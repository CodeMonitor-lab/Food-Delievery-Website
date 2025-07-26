import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderLinks from '../../data/HeaderLinks.json';
import Logo from './Logo';
import { RxCross2 } from "react-icons/rx";

// ICON IMPORTS
import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { PiMapPinAreaFill, PiChatDotsFill } from "react-icons/pi";
import { TbRosetteDiscountFilled, TbTruckLoading } from "react-icons/tb";
import { FaBowlRice } from "react-icons/fa6";
import { GiFoodTruck } from "react-icons/gi";
import { SiHomepage } from "react-icons/si";

// Icon map
const iconMap = {
  PiMapPinAreaFill,
  BsCart4,
  RiAdminFill,
  TbRosetteDiscountFilled,
  FaBowlRice,
  GiFoodTruck,
  TbTruckLoading,
  SiHomepage,
  PiChatDotsFill,
};

function HeaderSideMenu({ isOpen = true, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-opacity-40 z-30 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-40 shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-300">
          <Logo />
          <h1 className="text-xl font-semibold text-black">Tasty-Bite</h1>
          <button onClick={onClose}>
            <RxCross2 size={26} className="text-black" />
          </button>
        </div>

        <ul className="mt-8 px-4">
          {HeaderLinks.ToggleSidebarLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <li
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded hover:bg-red-400 transition-all"
              >
                {Icon && <Icon className="text-black text-2xl" />}
                <NavLink
                  to={link.to}
                  className="text-black text-lg font-medium"
                  onClick={onClose}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default HeaderSideMenu;
