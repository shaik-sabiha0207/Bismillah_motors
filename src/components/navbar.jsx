import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/images/logo.png";

import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Bismillah Motors"
          />
        </Link>


        {/* Center Navigation */}
<nav className="desktop-nav">
  <Link to="/" className="nav-link">
    Home
  </Link>

  <Link to="/services" className="nav-link">
    Services
  </Link>

  <Link to="/about" className="nav-link">
    About Us
  </Link>

  <Link to="/gallery" className="nav-link">
    Gallery
  </Link>
</nav>


       {/* Right Side */}
<div className="navbar-right">
  <Link
    to="/contact"
    className="nav-link"
  >
    Contact
  </Link>

  <Link
    to="/booking"
    className="booking-button"
  >
    Book a service
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >

          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}

        </button>

      </div>


      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <Link
          to="/"
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/services"
          onClick={closeMenu}
        >
          Services
        </Link>

        <Link
          to="/about"
          onClick={closeMenu}
        >
          About Us
        </Link>

        <Link
          to="/gallery"
          onClick={closeMenu}
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

        <Link
          to="/booking"
          className="mobile-booking-button"
          onClick={closeMenu}
        >
          Book a Service
        </Link>

      </nav>

    </header>
  );
}

export default Navbar;