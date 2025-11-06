import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImg from "../../image/slider/slider1.png"; // apni image ka path use karo

const PromoSection = () => {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "40vh", // 🔹 Slim height
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Banner Background"
        className="w-100 h-100 position-absolute top-0 start-0"
        style={{
          objectFit: "cover",
          filter: "brightness(60%)",
          zIndex: 0,
        }}
      />

      {/* Text Content */}
      <div
        className="position-relative z-1 px-3"
        style={{
          maxWidth: "700px",
        }}
      >
        <h5
          className="fw-semibold mb-2"
          style={{ letterSpacing: "2px", color: "#f0c674", textTransform: "uppercase" }}
        >
          <strong>BRAVIX</strong>
        </h5>

        <h2
          className="fw-bold mb-3"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            lineHeight: "1.2",
          }}
        >
          A Signature of  <span style={{ color: "#fff" }}>Style & Strength</span> 
        </h2>

        
      </div>
    </section>
  );
};

export default PromoSection;
