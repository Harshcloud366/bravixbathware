

import React from "react";
import sampleImg from "../../image/homepage/section3.jpg"; // apni image ka path daalna

function Hero1() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#f8fdfd", // subtle teal-tinted background
      }}
    >
      <div className="row align-items-center">
        {/* LEFT SIDE: IMAGE */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={sampleImg}
            alt="Kitchen"
            className="img-fluid rounded-3 shadow"
            style={{
              objectFit: "cover",
              maxHeight: "420px",
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div
          className="col-md-6"
          style={{
            padding: "0 4rem",
          }}
        >
          <hr
            style={{
              width: "70px",
              borderTop: "3px solid #008080",
              marginBottom: "25px",
              borderRadius: "2px",
            }}
          />
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "2.4rem",
              color: "#003c3c", // dark teal for strong text contrast
              lineHeight: "1.3",
            }}
          >
            Let Our Collection <br /> Of Bathware Accessories Inspire You
          </h2>
          <p
            className="text-muted mb-4"
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
              color: "#4a5d5d",
            }}
          >
           Discover our modern range of bathware accessories designed with
              innovation, quality, and elegance in mind — enhancing your daily
              experience with style and durability.
          </p>
          <button
            className="btn fw-semibold px-4 py-2"
            style={{
              background: "linear-gradient(135deg, #008080, #20c997)",
              color: "white",
              borderRadius: "25px",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 10px rgba(0, 128, 128, 0.3)",
            }}
          >
            GET CATALOGUE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero1;





