

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import s1 from "../../image/slider/slider1.png";
import s2 from "../../image/slider/slider2.png";
import s3 from "../../image/slider/slider3.png";

const Hero = () => {
  const slides = [
    {
      img: s1,
      title: "Elevate Your Everyday.",
      desc: "Discover modern elegance and refined functionality, crafted to transform your bathroom into a personal sanctuary.",
    },
    {
      img: s2,
      title: "Experience Your Daily Ritual.",
      desc: "Wrap yourself in softness with our premium towel series, designed for unparalleled comfort and style.",
    },
    {
      img: s3,
      title: "Refine Your Grooming.",
      desc: "Upgrade your routine with our curated selection of essentials, blending form and function.",
    },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide mt-5"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ position: "relative" }}
          >
            {/* Image + Overlay */}
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(108, 122, 122, 0.55), rgba(176, 207, 207, 0.25)), url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Text */}
              <div
                className="text-start px-4 px-md-5"
                style={{
                  color: "white",
                  zIndex: 2,
                  maxWidth: "600px",
                }}
              >
                <h1
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    lineHeight: "1.2",
                    textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                    color: "#f1f1f1",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                  }}
                >
                  {slide.desc}
                </p>
                <button
                  className="btn px-4 py-2"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#006d6d",
                    borderRadius: "50px",
                    fontWeight: "600",
                    letterSpacing: "0.5px",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#006d6d";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#006d6d";
                  }}
                >
                  SHOP NOW →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;





