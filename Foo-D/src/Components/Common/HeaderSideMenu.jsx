import React from 'react';
import { NavLink } from 'react-router-dom';
// import HeaderLinks from '../../data/HeaderLinks.json';
import ToggleSidebarLinks from '../../data/ToggleSidebarLinks.json';
import Logo from './Logo';
import { RxCross2 } from "react-icons/rx";
import { useScreenSize } from '../../hooks/useScreenSize'; // adjust the path as needed


import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";
import { GiFoodTruck } from "react-icons/gi";
import { SiHomepage } from "react-icons/si";
import { GiCrossedBones } from "react-icons/gi";
import { GiKnockedOutStars } from "react-icons/gi";
import { MdMarkUnreadChatAlt } from "react-icons/md";


const iconMap = {
  PiMapPinAreaFill,
  BsCart4,
  RiAdminFill,
  GiFoodTruck,
  SiHomepage,
  GiKnockedOutStars,
  MdMarkUnreadChatAlt,

};

function HeaderSideMenu({ isOpen = true, onClose }) {
  const screenSize = useScreenSize();
  const links = ToggleSidebarLinks[screenSize] || [];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-gray-0 bg-opacity-40 z-30 transition-opacity"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-auto sm:h-full py-3 sm:w-70 w-full bg-white z-40 shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-2  border-b-2 border-gray-300">
          <Logo />
          <h1 className="text-2xl font-semibold  text-amber-600">Tasty-Bite</h1>
          <button onClick={onClose}>
            <GiCrossedBones size={24} className='text-amber-800 cursor-pointer'  />
          </button>
        </div>

        <ul className="mt-8 px-4">
          {links.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <li
                key={index}
                className="flex items-center gap-3 px-6 py-2 rounded hover:bg-red-400 transition-all"
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
