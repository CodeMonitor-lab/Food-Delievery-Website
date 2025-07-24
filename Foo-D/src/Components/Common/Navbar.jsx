import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavbarLink = [
    { to: "/", label: "Home" },
    { to: "/Dishes", label: "Dishes" },
    { to: "/Offers", label: "Offers" },
    { to: "/Orders", label: "Orders" },
    { to: "/", label: "NearbyEats" },
    { to: "/Register", label: "Register" },
  ];

  return (
    <main>
      <nav className="flex gap-4 text-xl " >
        {NavbarLink.map((link,index) => (
          <ul key={index} >
            <li >
              <NavLink className={({isActive})=> isActive ? "text-amber-800" : "text-black hover:text-amber-800 transition " } to={link.to}>{link.label}</NavLink>
            </li>
          </ul>
        ))}
      </nav>
    </main>
  );
};

export default Navbar;
