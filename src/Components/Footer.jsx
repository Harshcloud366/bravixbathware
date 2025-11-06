//tk
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import b1 from "../media/Bravix Logo_PNG.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(220, 234, 234, 0.85)" }} className="pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <img
              src={b1}
              alt="Bravix Logo"
              className="mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p className="fw-bold" style={{ color: "#333333" }}>
              Bravix brings you premium bathroom accessories that blend luxury,
              durability, and smart design to transform your living spaces.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase" style={{ color: "#0056A6" }}>
              Useful Links
            </h5>
            <ul className="list-unstyled fw-bold">
              {["Home", "Products", "About", "Contact Us", "Shopping"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-decoration-none footer-link"
                    style={{ color: "#333333" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase" style={{ color: "#0056A6" }}>
              Contact Details
            </h5>
            <p className="fw-bold text-dark">
              <i className="bi bi-telephone me-2" style={{ color: "#0056A6" }}></i> +91 7772000092
            </p>
            <p className="fw-bold text-dark">
              <i className="bi bi-envelope me-2" style={{ color: "#0056A6" }}></i> bravixbathware@gmail.com.com
            </p>
            <p className="fw-bold text-dark">
              <i className="bi bi-geo-alt me-2" style={{ color: "#0056A6" }}></i> Indore, M.P., India
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              {["facebook", "instagram", "linkedin", "youtube"].map((icon, i) => (
                <a key={i} href="#" className="fs-5 fw-bold footer-social" style={{ color: "#0056A6" }}>
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#0056A6" }} />

        {/* Bottom Note */}
        <div className="text-center">
          <p className="mb-0 fw-bold" style={{ color: "#333333" }}>
            &copy; 2025 <span style={{ color: "#0056A6" }}>Bravix</span>. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Inline CSS for hover effects */}
      <style>{`
        .footer-link:hover {
          color: #0056A6 !important;
          text-decoration: underline;
        }
        .footer-social:hover {
          color: #333333 !important;
          transform: scale(1.2);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
