

import React from "react";
import b1 from "../../image/features/SS-304.jpg";
import b2 from "../../image/features/corner&shelf.JPG";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Timeless Steel. Everyday Luxury.",
      desc: "Discover the SS-304 Series — crafted from premium stainless steel for unmatched shine and durability.",
      img: b1,
      loading:"lazy",
      link: "/products/ss304",
    },
    {
      title: "Designed for Corners. Built for Space.",
      desc: "Introducing the SS-202 Shelf & Corner Range — a smart, space-saving collection designed for modern interiors.",
      img: b2,
      loading:"lazy",
      link: "/products/ss202",
    },
  ];

  return (
    <div className="container-fluid px-0">
      {/* ======= HEADING ======= */}
      <div className="text-center py-5">
        <h2
          className="fw-bold text-uppercase"
          style={{ color: "#00796B", letterSpacing: "2px" }}
        >
          OUR COLLECTIONS
        </h2>
        <div
          className="mx-auto mt-2"
          style={{
            width: "100px",
            height: "3px",
            backgroundColor: "#00796B",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {/* ======= COLLECTION CARDS ======= */}
      <div className="row g-4 g-md-5 px-3 px-md-5 mx-0 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 position-relative feature-card"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "70vh",
              borderRadius: "10px",
              cursor: "pointer",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onClick={() => navigate(item.link)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            ></div>

            {/* Text Content */}
            <div
              className="position-absolute text-white p-4 p-md-5"
              style={{
                bottom: "10%",
                left: "8%",
                right: "8%",
                zIndex: "2",
              }}
            >
              <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>
                {item.title}
              </h2>
              <p
                className="mb-4"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  color: "white"
                }}
              >
                {item.desc}
              </p>
              <button
                className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                onClick={() => navigate(item.link)}
              >
                → View
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Features;



