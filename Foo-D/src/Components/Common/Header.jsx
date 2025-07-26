import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Logo, ToggleHamMenu, HeaderSideMenu } from "../index";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(window.scrollY);

  // Hide header on scroll down, show on scroll up
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

  // Reset header and close mobile menu on route change
  useEffect(() => {
    setIsVisible(true);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white backdrop-blur-md`}
      >
        <section className="flex items-center justify-around py-3 px-4 md:px-8">
          <Logo />
          <div>
            <Navbar />
          </div>
          <div className="sm:block">
            <ToggleHamMenu onClick={toggleMobileMenu} />
          </div>
        </section>
      </header>

      {/* Mobile Side Menu */}
      <HeaderSideMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
