import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import static images
import v1 from "../../image/featuredproducts/v1.JPG";
import v2 from "../../image/featuredproducts/v2.JPG";
import v3 from "../../image/featuredproducts/v3.JPG";
import v4 from "../../image/featuredproducts/v4.JPG";
import v5 from "../../image/featuredproducts/v5.JPG";
import v6 from "../../image/featuredproducts/v6.JPG";
import v7 from "../../image/featuredproducts/v7.JPG";
import v8 from "../../image/featuredproducts/v8.JPG";
import v9 from "../../image/featuredproducts/v9.png";
import v10 from "../../image/featuredproducts/v10.png";
import v11 from "../../image/featuredproducts/v11.png";
import v12 from "../../image/featuredproducts/v12.png";

const FeaturedProducts = () => {
  const products = [
    { id: 1, title: "Modern Chrome Hook", category: "Accessories, Tiles", img1: v1, img2: v2 },
    { id: 2, title: "Classic Silver Tap", category: "Baths, Toilets", img1: v3, img2: v4 },
    { id: 3, title: "Stainless Holder", category: "Toilets, Uncategorized", img1: v5, img2: v6 },
    { id: 4, title: "Elegant Wall Mount", category: "Accessories", img1: v7, img2: v8 },
    { id: 5, title: "Matte Basin Mixer", category: "Baths", img1: v9, img2: v10 },
    { id: 6, title: "Minimalist Dispenser", category: "Showers", img1: v11, img2: v12 },
  ];

  const slides = [products.slice(0, 3), products.slice(3, 6)];
  const [hovered, setHovered] = useState({});
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  // ✅ Functions to control carousel
  const handlePrev = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === slides.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center">
        {/* LEFT TEXT SECTION */}
        <div className="col-md-4">
          <p style={{ color: "#088178", letterSpacing: "2px" }}>NEW PRODUCTS</p>
          <h2 className="fw-bold mb-3" style={{ fontSize: "2.3rem" }}>
            Explore our featured products!
          </h2>
          <p className="text-secondary mb-4">
            Touch the luxury and harmony in the interior with trendy series from
            the best designers.
          </p>
          <div>
            <button
              className="btn btn-outline-secondary rounded-circle me-2"
              onClick={handlePrev}
            >
              ←
            </button>
            <button
              className="btn btn-outline-secondary rounded-circle"
              onClick={handleNext}
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT CAROUSEL SECTION */}
        <div className="col-md-8">
          <Carousel
            ref={carouselRef}
            indicators={false}
            controls={false}
            interval={4000}
            pause={false}
            activeIndex={index}
            onSelect={(selectedIndex) => setIndex(selectedIndex)}
          >
            {slides.map((group, i) => (
              <Carousel.Item key={i}>
                <div className="d-flex justify-content-around">
                  {group.map((item) => (
                    <div
                      key={item.id}
                      className="text-center bg-white shadow-sm p-3 rounded product-card"
                      onMouseEnter={() =>
                        setHovered({ ...hovered, [item.id]: true })
                      }
                      onMouseLeave={() =>
                        setHovered({ ...hovered, [item.id]: false })
                      }
                      style={{
                        width: "250px",
                        transition: "all 0.4s ease",
                        transform: hovered[item.id] ? "translateY(-5px)" : "none",
                      }}
                    >
                      <div className="position-relative">
                        <img
                          src={hovered[item.id] ? item.img2 : item.img1}
                          alt={item.title}
                          className="img-fluid mb-3"
                          style={{
                            width: "100%",
                            height: "260px",
                            objectFit: "cover",
                            borderRadius: "6px",
                            transition: "0.5s ease",
                            filter: hovered[item.id] ? "brightness(95%)" : "brightness(100%)",
                          }}
                        />
                        {hovered[item.id] && (
                          <button
                            className="btn btn-teal px-4 py-2 mt-2"
                            style={{
                              backgroundColor: "#088178",
                              color: "white",
                              borderRadius: "50px",
                              fontWeight: "500",
                              transition: "0.3s",
                            }}
                          >
                            View More
                          </button>
                        )}
                      </div>
                      <p className="text-uppercase text-muted small mt-3 mb-1">
                        {item.category}
                      </p>
                      <h6>{item.title}</h6>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
