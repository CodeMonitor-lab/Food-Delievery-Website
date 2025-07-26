import React, { useState, useEffect } from "react";
import ActiveLink from './ActiveLink';
import HeaderLinks from '../../data/HeaderLinks.json';

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

// Hook to detect screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getSizeCategory());

  function getSizeCategory() {
    const width = window.innerWidth;
    if (width < 480) return "extraSmallScreen";
    if (width < 640) return "smallScreen";
    if (width < 768) return "mediumScreen";
    if (width < 1024) return "largeScreen";
    return "largeScreen"; // fallback if no largeScreen exists
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSizeCategory());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const Navbar = () => {
  const screenSize = useScreenSize(); // "smallScreen" | "mediumScreen"
  const links = HeaderLinks[screenSize] || [];

  return (
    <main>
      <nav aria-label="Main Navigation">
        <ul className="flex gap-6 text-xl items-center">
          {links.map((link, index) => {
            const Icon = iconMap[link.icon]; // Will be undefined for mediumScreen
            return (
              <li key={index}>
                <ActiveLink to={link.to}>
                  <div className="flex items-center gap-1">
                    {Icon && <Icon className="text-md" />}
                    <span className="text-xl" >{link.label}</span>
                  </div>
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
