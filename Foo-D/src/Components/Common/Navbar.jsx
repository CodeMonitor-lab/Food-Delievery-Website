import React from "react";
import ActiveLink from './ActiveLink';
import HeaderLinks from '../../data/HeaderLinks.json';
import {useScreenSize} from "../../hooks/useScreenSize";

// ICON IMPORTS
import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TbRosetteDiscountFilled } from "react-icons/tb";
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
  SiHomepage
};

const Navbar = () => {
  const screenSize = useScreenSize();
  const links = HeaderLinks[screenSize] || HeaderLinks["smallScreen"];

  return (
    <main className="w-full px-4 py-2">
      <nav aria-label="Primary site navigation">
        <ul className="flex gap-6 sm:gap-6 items-center">
          {links.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <li key={index}>
                <ActiveLink to={link.to} className="flex items-center gap-1 text-xl">
                  {Icon && <Icon className='text-xl' title={link.label} />}
                  <span className="text-lg" >{link.label}</span>
                </ActiveLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
