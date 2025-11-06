

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb, Modal } from "react-bootstrap"; 

// UserDashboard component with the new UI and backend data fetching
const UserDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [series, setSeries] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Backend se data fetch karne ke liye useEffect hook
  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Fetch Categories from backend
  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/user/categories");
      setCategories(res.data.slice(0, 2)); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories", error);
      setError("Failed to fetch categories. Please try again later.");
      setLoading(false);
    }
  };

  // ✅ Fetch Series from backend
  const fetchSeries = async (categoryId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`/api/user/series/category/${categoryId}`);
      setSeries(res.data);
      setProducts([]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching series", error);
      setError("Failed to fetch series. Please try again later.");
      setLoading(false);
    }
  };

  // ✅ Fetch Products from backend
  const fetchProducts = async (seriesId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`/api/user/products/series/${seriesId}`);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    }
  };

  // ✅ Handlers for clicks
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedSeries(null);
    fetchSeries(cat._id);
  };

  const handleSeriesClick = (ser) => {
    setSelectedSeries(ser);
    fetchProducts(ser._id);
  };

  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setShowImageModal(true);
  };

  // ✅ Breadcrumb navigation
  const resetToCategories = () => {
    setSelectedCategory(null);
    setSelectedSeries(null);
    setSeries([]);
    setProducts([]);
  };

  const resetToSeries = () => {
    setSelectedSeries(null);
    setProducts([]);
  };

  // ✅ Custom Card Component with hover effect
  const CustomCardItem = ({ item, onClick, type }) => {
    const isCategory = type === 'categories';
    const isProduct = type === 'products';

    return (
      <div className={`col-12 mb-4 d-flex justify-content-center ${isCategory ? 'col-md-6' : 'col-md-4'}`}>
        <div 
          className="custom-card shadow-sm custom-hover-effect" 
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          {isCategory ? (
            <div className="custom-card-content">
              <div className="custom-card-image-container">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="custom-card-image"
                />
              </div>
              <div className="custom-card-text-container">
                <div className="custom-card-text">
                  <p className="series-number">{item.seriesNo}</p>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            </div>
          ) : isProduct ? (
            <div className="custom-card-content-product">
                <div className="product-image-container" onClick={(e) => { e.stopPropagation(); handleImageClick(item.imageUrl); }}>
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="custom-card-image-product"
                    />
                </div>
                <div className="card-body-product">
                    <h5 className="card-title-product">{item.seriesNo}</h5>
                    <p className="card-text-product"><strong>Product Name: </strong>{item.name}</p>
                    <p className="card-text-product">{item.description}</p>
                </div>
            </div>
          ) : (
            <div className="custom-card-content-series">
              <div className="series-image-container">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="custom-card-image-series"
                />
              </div>
              <div className="card-body-series">
                <h5 className="card-title-series">{item.name}</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" xintegrity="sha384-ho+j7jyWK8fG5N7p7v2a/QWl1x4+e5sX7k5E5p+Fz5yE5V5w5S5g5E5s5V5x5W5X5yE5A5E5V5s5W5X5z" crossOrigin="anonymous" />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8f9fa;
        }

        /* Common Styles for both card types */
        .custom-card {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #ccc;
          display: flex;
          flex-direction: column;
        }
        
        .custom-hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        /* Category Card Styles */
        .custom-card-content {
          display: flex;
          height: 100%;
        }

        .custom-card-image-container {
          flex: 0 0 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: #fff;
        }
        
        .custom-card-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .custom-hover-effect:hover .custom-card-image {
          transform: scale(1.05);
        }

        .custom-card-text-container {
          flex: 1;
          background-color: #f1f1f1;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .custom-card-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .series-number {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0;
          color: #555;
        }
        
        .card-title {
          font-weight: 600;
          margin-top: 5px;
          font-size: 1.5rem;
        }

        .card-description {
          font-size: 0.8rem;
          color: #777;
        }

        /* Series and Products Card Styles */
        .custom-card-content-series {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          width: 250px;
        }
        
        .series-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .custom-card-image-series {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .custom-hover-effect:hover .custom-card-image-series {
          transform: scale(1.05);
        }
        
        .card-body-series {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 0.5rem;
        }

        .card-title-series {
          font-weight: 600;
          font-size: 1.25rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        /* Product Card Styles */
        .custom-card-content-product {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          width: 250px;
        }
        
        .product-image-container {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .custom-card-image-product {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .card-body-product {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
            width: 100%;
        }

        .card-title-product {
          font-weight: 600;
          font-size: 1.25rem;
          margin-top: 0;
          margin-bottom: 0.5rem;
          width: 100%;
        }

        .card-text-product {
            font-size: 0.9rem;
            color: #555;
            margin-bottom: 0.25rem;
            width: 100%;
        }
        
      ` }} />

      <div className="container my-4">
        {/* ✅ Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" onClick={resetToCategories} style={{cursor: 'pointer'}}>Categories</li>
            {selectedCategory && (
              <li className="breadcrumb-item" onClick={resetToSeries} style={{cursor: 'pointer'}}>
                {selectedCategory.name}
              </li>
            )}
            {selectedSeries && (
              <li className="breadcrumb-item active" aria-current="page">
                {selectedSeries.name}
              </li>
            )}
          </ol>
        </nav>

        {/* Content Loading & Error States */}
        {loading && (
          <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="ms-3">Loading...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-danger mt-4">{error}</div>
        )}
        
        {/* Render Content based on state */}
        {!loading && !error && !selectedCategory && (
          <div className="row g-4 justify-content-center">
            {categories.map((cat) => (
              <CustomCardItem
                key={cat._id}
                item={cat}
                onClick={() => handleCategoryClick(cat)}
                type="categories"
              />
            ))}
          </div>
        )}

        {!loading && !error && selectedCategory && !selectedSeries && (
          <div className="row g-4 justify-content-center">
            {series.map((ser) => (
              <CustomCardItem
                key={ser._id}
                item={ser}
                onClick={() => handleSeriesClick(ser)}
                type="series"
              />
            ))}
          </div>
        )}

        {!loading && !error && selectedSeries && (
          <div className="row g-4 justify-content-center">
            {products.map((prod) => (
              <CustomCardItem key={prod._id} item={prod} onClick={() => {}} type="products" />
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Modal show={showImageModal} onHide={() => setShowImageModal(false)} size="lg" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <img src={modalImage} alt="Product" className="img-fluid" style={{ maxHeight: '80vh' }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserDashboard;