import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Logo, ToggleHamMenu,HederSideMenu } from "../index";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    setIsMobileMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white backdrop-blur-md`}
      >
        <div className="flex items-center gap-4 justify-between px-6 py-3 max-w-7xl mx-auto">
          <Logo />
          <div className="hidden md:flex">
            <Navbar />
          </div>
          <div className="md:hidden">
            <ToggleHamMenu onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Side Menu for Mobile */}
      <HederSideMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
