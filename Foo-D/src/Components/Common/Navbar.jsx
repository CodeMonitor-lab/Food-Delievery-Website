import React from "react";
import { NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { PiMapPinAreaFill } from "react-icons/pi";

const Navbar = () => {
  const NavbarLink = [
    { to: "/", label: "Home" },
    { to: "/Dishes", label: "Dishes" },
    { to: "/Offers", label: "Offers" },
    // { to: "/Orders", label: "Orders" },
    { to: "/NearByEats", label: "Search..", icon: <PiMapPinAreaFill size={24} /> },
    { to: "/Cart", label: "|", icon: <BsCart4 size={20} /> },
    { to: "/Register", label: "login", icon: <RiAdminFill size={20} /> },
  ];

  return (
    <main>
      <nav>
        <ul className="flex gap-6 text-xl items-center">
          {NavbarLink.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-800 flex items-center gap-1"
                    : "text-black hover:text-amber-800 transition flex items-center gap-1"
                }
              >
                {link.icon && <span className="text-md sm:text-xs ">{link.icon}</span>}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Navbar;
