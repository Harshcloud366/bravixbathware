//tk
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import b1 from "../media/Bravix Logo_PNG.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(220, 234, 234, 0.85)",
        fontSize: "14px",
      }}
      className="pt-5 pb-3"
    >
      <div className="container">
        <div className="row gy-4 text-center text-md-start align-items-start">
          {/* 🔹 About Section */}
          <div className="col-12 col-md-4">
            <img
              src={b1}
              loading="lazy"
              alt="Bravix Logo"
              className="mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p className="fw-semibold mb-0" style={{ color: "#333333" }}>
              Bravix delivers premium bathroom accessories that combine
              <br className="d-none d-md-block" />
              luxury, durability, and elegant design — redefining style for
              modern homes.
            </p>
          </div>

          {/* 🔹 Useful Links */}
          <div className="col-12 col-sm-6 col-md-4">
            <h5
              className="fw-bold text-uppercase mb-3"
              style={{ color: "#0056A6", fontSize: "16px" }}
            >
              Useful Links
            </h5>
            <ul className="list-unstyled fw-semibold mb-0">
              {["Home", "Products", "About", "Contact Us", "Shopping"].map(
                (link, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href="#"
                      className="text-decoration-none footer-link"
                      style={{ color: "#333333" }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 🔹 Contact Section */}
          <div className="col-12 col-sm-6 col-md-4">
            <h5
              className="fw-bold text-uppercase mb-3"
              style={{ color: "#0056A6", fontSize: "16px" }}
            >
              Contact Details
            </h5>
            <div className="d-flex flex-column gap-2 align-items-center align-items-md-start">
              <p className="fw-semibold text-dark mb-0">
                <i
                  className="bi bi-telephone me-2"
                  style={{ color: "#0056A6" }}
                ></i>
                +91 7772000092
              </p>
              <p className="fw-semibold text-dark mb-0">
                <i
                  className="bi bi-envelope me-2"
                  style={{ color: "#0056A6" }}
                ></i>
                bravixbathware@gmail.com
              </p>
              <p className="fw-semibold text-dark mb-0">
                <i
                  className="bi bi-geo-alt me-2"
                  style={{ color: "#0056A6" }}
                ></i>
                Indore, M.P., India
              </p>
            </div>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-3">
              {["facebook", "instagram", "linkedin", "youtube"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="fs-5 fw-bold footer-social"
                    style={{ color: "#0056A6" }}
                  >
                    <i className={`bi bi-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#0056A6", margin: "2rem 0 1rem" }} />

        {/* 🔹 Bottom Note */}
        <div className="text-center">
          <p className="mb-0 fw-semibold" style={{ color: "#333333" }}>
            &copy; 2025 <span style={{ color: "#0056A6" }}>Bravix</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>

      {/* 🔹 CSS for better spacing & responsiveness */}
      <style>{`
        .footer-link:hover {
          color: #0056A6 !important;
          text-decoration: underline;
        }
        .footer-social {
          transition: all 0.3s ease-in-out;
        }
        .footer-social:hover {
          color: #333333 !important;
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          footer {
            text-align: center;
          }
          footer p, footer a {
            font-size: 13px;
          }
          footer .row > div {
            margin-bottom: 1.2rem;
          }
          footer img {
            margin: 0 auto;
          }
        }

        @media (max-width: 576px) {
          footer {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

