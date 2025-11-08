//hj without transparent
import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaDownload } from "react-icons/fa";
import logo from "../media/Bravix Logo_PNG.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const iconColor = "#008080";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
     {/* 🔹 Top Info Bar */}
{/* 🔹 Top Info Bar */}
<div
  className="d-flex justify-content-between align-items-center px-3 px-md-5 py-2 text-white flex-nowrap"
  style={{
    background: "#008080",
    fontSize: "11px",
    letterSpacing: "0.4px",
    whiteSpace: "nowrap",
    overflowX: "auto",
  }}
>
  {/* ✅ Mobile & Desktop Together */}
  <div className="d-flex align-items-center justify-content-between w-100 flex-wrap flex-md-nowrap">
    <div className="d-flex align-items-center flex-nowrap">
      📞 <strong className="">+91 7772000092</strong>
      <span className="mx-2 d-none d-md-inline">|</span>
      <span className="ms-3">
        ✉️ <strong>bravixbathware@gmail.com</strong>
      </span>
    </div>

    <div className="d-none d-md-block">
      Free metro delivery | <strong>Sign Up</strong> for ₹200 off your first order!
    </div>
  </div>
</div>






      {/* 🔹 Compact White Navbar */}
      <header
        className="navbar d-flex align-items-center justify-content-between px-3 px-md-5 w-100"
        style={{
          position: "absolute",
          top: "30px",
          left: 0,
          width: "100%",
          background: "white",
          border: "none",
          zIndex: 100,
          padding: "6px 0",
        }}
      >
        {/* LEFT: MENU BUTTON */}
        <div
          className="d-flex align-items-center gap-2"
          onClick={toggleMenu}
          style={{ cursor: "pointer", color: iconColor, fontSize: "14px" }}
        >
          <FaBars className="fs-5" />
          <span className="fw-semibold d-none d-md-inline">MENU</span>
        </div>

        {/* CENTER: LOGO */}
        <div className="flex-grow-1 d-flex justify-content-md-center justify-content-end">
          <img
            src={logo}
            loading="lazy"
            alt="Bravix Logo"
            style={{ width: "115px", height: "auto" }}
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <a href="#" className="fs-5" style={{ color: iconColor }}>
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="btn fw-semibold px-3 py-1"
            style={{
              background: "linear-gradient(135deg, #008080, #20c997)",
              borderRadius: "25px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <FaDownload className="me-2" /> Brochure
          </a>
        </div>
      </header>

      {/* 🔹 Slide Menu */}
      <div
        className={`side-menu ${isMenuOpen ? "active" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "300px",
          backgroundColor: "#fff",
          boxShadow: "3px 0 15px rgba(0,0,0,0.2)",
          zIndex: 1100,
          padding: "2rem 1.5rem",
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s ease-in-out",
        }}
      >
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h6
            className="fw-bold mb-0"
            style={{ color: "#008080", letterSpacing: "1px" }}
          >
            MAIN MENU
          </h6>
          <FaTimes
            className="fs-4"
            style={{ cursor: "pointer", color: "#008080" }}
            onClick={closeMenu}
          />
        </div>

        {/* MENU LINKS */}
        <nav className="d-flex flex-column">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="py-2 d-flex justify-content-between align-items-center text-dark text-decoration-none border-bottom"
              onClick={closeMenu}
            >
              {item.name}
              <span style={{ color: "#008080" }}>{">"}</span>
            </Link>
          ))}
        </nav>

        {/* MOBILE BOTTOM BUTTONS */}
        <div className="position-absolute bottom-0 start-0 w-100 mb-4 d-flex flex-column align-items-center gap-3">
          <a href="#" className="fs-3" style={{ color: "#008080" }}>
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="btn text-white fw-semibold px-4 py-2"
            style={{
              background: "linear-gradient(135deg, #008080, #20c997)",
              borderRadius: "25px",
            }}
            onClick={closeMenu}
          >
            <FaDownload className="me-2" /> Download Brochure
          </a>
        </div>
      </div>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
          }}
        ></div>
      )}
    </>
  );
};

export default Header;













