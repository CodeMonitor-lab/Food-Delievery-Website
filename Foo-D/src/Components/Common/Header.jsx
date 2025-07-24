import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar,Logo,ToggleHamMenu } from "../index";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);

  // Scroll-based header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // scroll down
      } else {
        setIsVisible(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset header visibility on route change
  useEffect(() => {
    setIsVisible(true);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-150 transition-transform duration-300 shadow-md ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-amber-100`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Logo/>
        <Navbar />
        <ToggleHamMenu/>
      </div>
    </header>
  );
};

export default Header;
