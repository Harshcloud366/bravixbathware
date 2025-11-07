

import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ only if using React Router
import Aura from "../../image/homeproducts/aura.webp";
import Edge from "../../image/homeproducts/edge.webp";
import Nova from "../../image/homeproducts/nova.webp";
import Velvera from "../../image/homeproducts/velvera.webp";
import ShelfCorners from "../../image/homeproducts/shelf.webp";
import Khuti from "../../image/homeproducts/khutti.webp";

const HomeProducts = () => {
  const navigate = useNavigate(); // ✅ for programmatic navigation

  const products = [
    { title: "Aura", img: Aura, link: "/bathroom" },
    { title: "Edge", img: Edge, link: "/toilets" },
    { title: "Nova", img: Nova, link: "/baths" },
    { title: "Velvera", img: Velvera, link: "/showers" },
    { title: "Shelf & Corners", img: ShelfCorners, link: "/tapware" },
    { title: "Khuti", img: Khuti, link: "/accessories" },
  ];

  return (
    <section className="py-5">
      {/* Section Header */}
        <div className="container d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-uppercase text-muted">
              Explore Our Departments
            </small>
            <h2 className="fw-bold mt-2" style={{ fontSize: "2rem", color: "#222" }}>
              The products you need for <br /> the look you want
            </h2>
          </div>
          <a href="#" className="text-decoration-none text-dark fw-semibold">
            View All Category →
          </a>
        </div>
      <div className="container-fluid">
        

        {/* Image Grid */}
        <div className="row g-4">
          {products.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                className="position-relative overflow-hidden rounded-3"
                style={{ height: "320px", cursor: "pointer" }}
                onClick={() => navigate(item.link)} // ✅ click action
              >
              <img
                  src={item.img}
                  alt={item.title}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.85)",
                    transition: "transform 0.5s ease, filter 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.07)";
                    e.currentTarget.style.filter = "brightness(0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(0.85)";
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                  style={{
                    background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;

