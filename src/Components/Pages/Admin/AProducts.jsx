// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Modal, Button, Card } from "react-bootstrap";

// function Products() {
//   const { seriesId } = useParams();
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [seriesName, setSeriesName] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     productName: "",
//     seriesNo: "",
//     description: "",
//     image: ""
//   });
//   const [imageFile, setImageFile] = useState(null);

//   // Fetch Products + Series Name
//   useEffect(() => {
//     fetchProducts();
//     fetchSeriesName();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`/api/admin/series/${seriesId}/products`);
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const fetchSeriesName = async () => {
//     try {
//       const res = await axios.get(`/api/admin/series/${seriesId}`);
//       setSeriesName(res.data.name);
//     } catch (error) {
//       console.error("Error fetching series name", error);
//     }
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle File Change
//   const handleFileChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   // Add Product
//   const handleCreateProduct = async (e) => {
//     e.preventDefault();
//     try {
//       let uploadedImageUrl = formData.image;

//       if (imageFile) {
//         const imgData = new FormData();
//         imgData.append("file", imageFile);
//         imgData.append("upload_preset", "bravix_preset"); // ✅ अपने Cloudinary preset का नाम डालना

//         const uploadRes = await axios.post(
//           "https://api.cloudinary.com/v1_1/dzhtuqjho/image/upload", // ✅ अपने cloud name का इस्तेमाल करना
//           imgData
//         );

//         uploadedImageUrl = uploadRes.data.secure_url;
//       }

//       const finalData = { ...formData, image: uploadedImageUrl };

//       await axios.post(`/api/admin/series/${seriesId}/products`, finalData);
//       setShowModal(false);
//       setFormData({ productName: "", seriesNo: "", description: "", image: "" });
//       setImageFile(null);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error creating product", error);
//     }
//   };

//   // Delete Product
//   const deleteProduct = async (id) => {
//     if (window.confirm("Delete this product?")) {
//       try {
//         await axios.delete(`/api/admin/products/${id}`);
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <Button variant="secondary" onClick={() => navigate(-1)}>
//             ← Back
//           </Button>
//           <h2 className="d-inline-block ms-3">{seriesName} - Products</h2>
//         </div>
//         <Button onClick={() => setShowModal(true)}>+ Add Product</Button>
//       </div>

//       {/* ✅ Product Cards */}
//       <div className="row">
//         {products.map((prod) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={prod._id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={prod.image}
//                 alt={prod.productName}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <Card.Body>
//                 <h5>{prod.productName}</h5>
//                 <p className="text-muted">Series No: {prod.seriesNo}</p>
//                 <p>{prod.description}</p>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => deleteProduct(prod._id)}
//                 >
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Add Product Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateProduct} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Product Name</label>
//               <input
//                 type="text"
//                 name="productName"
//                 className="form-control"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Series No</label>
//               <input
//                 type="text"
//                 name="seriesNo"
//                 className="form-control"
//                 value={formData.seriesNo}
//                 onChange={handleChange}
//                 placeholder="AU-101"
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Description</label>
//               <textarea
//                 name="description"
//                 className="form-control"
//                 value={formData.description}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12">
//               <label className="form-label">Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="form-control"
//                 onChange={handleFileChange}
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <Button type="submit" className="mt-2">
//                 Save
//               </Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Modal, Button, Card, Spinner } from "react-bootstrap";
// import imageCompression from "browser-image-compression";

// function AProducts() {
//   const { seriesId } = useParams();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [seriesName, setSeriesName] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [formData, setFormData] = useState({
//     productName: "",
//     seriesNo: "",
//     description: "",
//     image: null
//   });

//   useEffect(() => {
//     fetchProducts();
//     fetchSeriesName();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`/api/admin/products/series/${seriesId}`);
//       setProducts(res.data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const fetchSeriesName = async () => {
//     try {
//       const res = await axios.get(`/api/admin/series/${seriesId}`);
//       setSeriesName(res.data.name);
//     } catch (error) {
//       console.error("Error fetching series name", error);
//     }
//   };

//   const handleChange = async (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image" && files?.length) {
//       setUploading(true);
//       try {
//         const compressedFile = await imageCompression(files[0], {
//           maxSizeMB: 5,
//           maxWidthOrHeight: 2000,
//           useWebWorker: true,
//         });
//         setFormData({ ...formData, image: compressedFile });
//       } catch (err) {
//         console.error("Compression failed", err);
//       }
//       setUploading(false);
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleCreateProduct = async (e) => {
//     e.preventDefault();
//     if (!formData.image) return alert("Please select an image");

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("name", formData.productName);
//       data.append("seriesNo", formData.seriesNo);
//       data.append("description", formData.description);
//       data.append("seriesId", seriesId);
//       data.append("image", formData.image);

//       await axios.post("/api/admin/products", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setShowModal(false);
//       setFormData({ productName: "", seriesNo: "", description: "", image: null });
//       fetchProducts();
//     } catch (error) {
//       console.error("Error creating product", error);
//       alert(error.response?.data?.message || error.message);
//     }
//     setUploading(false);
//   };

//   const deleteProduct = async (id) => {
//     if (window.confirm("Delete this product?")) {
//       try {
//         await axios.delete(`/api/admin/products/${id}`);
//         fetchProducts();
//       } catch (error) {
//         console.error("Error deleting product", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <Button variant="secondary" onClick={() => navigate(-1)}>← Back</Button>
//           <h2 className="d-inline-block ms-3">{seriesName} - Products</h2>
//         </div>
//         <Button onClick={() => setShowModal(true)}>+ Add Product</Button>
//       </div>

//       <div className="row">
//         {products.map((prod) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={prod._id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={prod.imageUrl}
//                 alt={prod.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <Card.Body>
//                 <h5>{prod.name}</h5>
//                 <p className="text-muted">Series No: {prod.seriesNo}</p>
//                 <p>{prod.description}</p>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => deleteProduct(prod._id)}
//                 >
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateProduct} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Product Name</label>
//               <input
//                 type="text"
//                 name="productName"
//                 className="form-control"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Series No</label>
//               <input
//                 type="text"
//                 name="seriesNo"
//                 className="form-control"
//                 value={formData.seriesNo}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Description</label>
//               <textarea
//                 name="description"
//                 className="form-control"
//                 value={formData.description}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
//             <div className="col-12">
//               <label className="form-label">Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="form-control"
//                 name="image"
//                 onChange={handleChange}
//                 required
//               />
//               {uploading && (
//                 <div className="mt-2 d-flex align-items-center">
//                   <Spinner animation="border" size="sm" className="me-2" />
//                   Compressing & Uploading...
//                 </div>
//               )}
//             </div>
//             <div className="col-12">
//               <Button type="submit" className="mt-2" disabled={uploading}>Save</Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default AProducts;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Card, Spinner } from "react-bootstrap";
// Since browser-image-compression is a third-party library, we'll comment it out
// to avoid compilation issues in this environment.
import imageCompression from "browser-image-compression";

function AProducts() {
  const { seriesId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [seriesName, setSeriesName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    seriesNo: "",
    description: "",
    image: null
  });

  useEffect(() => {
    fetchProducts();
    fetchSeriesName();
  }, [seriesId]);

  // ✅ Fetch Products from the backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/admin/products/series/${seriesId}`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  // ✅ Fetch Series Name for the header
  const fetchSeriesName = async () => {
    try {
      const res = await axios.get(`/api/admin/series/${seriesId}`);
      setSeriesName(res.data.name);
    } catch (error) {
      console.error("Error fetching series name", error);
    }
  };

  const handleChange = async (e) => {
  const { name, value, files } = e.target;
  if (name === "image" && files?.length) {
    setUploading(true);
    try {
      const options = {
        maxSizeMB: 1, // Compress target size ~1MB
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(files[0], options);

      console.log(
        "Original size:",
        (files[0].size / 1024 / 1024).toFixed(2),
        "MB"
      );
      console.log(
        "Compressed size:",
        (compressedFile.size / 1024 / 1024).toFixed(2),
        "MB"
      );

      setFormData({ ...formData, image: compressedFile });
    } catch (err) {
      console.error("Compression failed", err);
    }
    setUploading(false);
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  const handleCreateProduct = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      setInfoMessage("Please select an image");
      setShowInfoModal(true);
      return;
    }

    setUploading(true);
    try {
      const data = new FormData();
      data.append("name", formData.productName);
      data.append("seriesNo", formData.seriesNo);
      data.append("description", formData.description);
      data.append("seriesId", seriesId);
      data.append("image", formData.image);

      await axios.post("/api/admin/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowModal(false);
      setFormData({ productName: "", seriesNo: "", description: "", image: null });
      fetchProducts();
      setInfoMessage("Product created successfully!");
      setShowInfoModal(true);
    } catch (error) {
      console.error("Error creating product", error);
      setInfoMessage(error.response?.data?.message || error.message);
      setShowInfoModal(true);
    }
    setUploading(false);
  };

  const handleDeleteClick = (id) => {
    setProductIdToDelete(id);
    setShowConfirmModal(true);
  };

  const deleteProduct = async () => {
    if (productIdToDelete) {
      try {
        await axios.delete(`/api/admin/products/${productIdToDelete}`);
        fetchProducts();
        setShowConfirmModal(false);
        setInfoMessage("Product deleted successfully!");
        setShowInfoModal(true);
      } catch (error) {
        console.error("Error deleting product", error);
        setShowConfirmModal(false);
        setInfoMessage("Failed to delete product. Please try again later.");
        setShowInfoModal(true);
      }
    }
  };

  return (
    <div className="container-fluid categories-container">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8f9fa;
        }

        .categories-container {
            padding: 2rem;
        }

        .manage-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .manage-header h2 {
            font-weight: 600;
        }

        .add-category-btn {
            background-color: #007bff;
            border-color: #007bff;
            font-weight: 500;
        }

        .custom-card {
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #e0e0e0;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }

        .custom-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }

        .custom-card-image-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-bottom: 1px solid #e0e0e0;
        }

        .custom-card-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.3s ease;
        }
        
        .custom-card:hover .custom-card-image {
            transform: scale(1.05);
        }

        .custom-card-body {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
        }

        .product-info-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .modal-footer button {
            border-radius: 50px;
            padding: 0.5rem 1.5rem;
        }
      `}} />
      <div className="manage-header">
        <div>
          <Button variant="secondary" onClick={() => navigate(-1)} className="me-3">← Back</Button>
          <h2 className="d-inline-block">{seriesName} - Products</h2>
        </div>
        <Button onClick={() => setShowModal(true)} className="add-category-btn">
          + Add Product
        </Button>
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((prod) => (
            <div className="col-md-6 col-lg-4 mb-4" key={prod._id}>
              <Card className="custom-card">
                <div className="custom-card-image-container">
                  <Card.Img
                    variant="top"
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="custom-card-image"
                  />
                </div>
                <Card.Body className="custom-card-body">
                  <div className="product-info-container">
                    <h5 className="mb-0">{prod.name}</h5>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(prod._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <p className="text-muted mb-1">Series No: {prod.seriesNo}</p>
                  <p className="mb-0">{prod.description}</p>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No products found. Add a new one.</p>
        )}
      </div>

      {/* Add Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleCreateProduct} className="row g-3">
            <div className="col-12">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                name="productName"
                className="form-control"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Series No</label>
              <input
                type="text"
                name="seriesNo"
                className="form-control"
                value={formData.seriesNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="form-control"
                onChange={handleChange}
                required
              />
              {uploading && (
                <div className="mt-2 d-flex align-items-center">
                  <Spinner animation="border" size="sm" className="me-2" />
                  Compressing & Uploading...
                </div>
              )}
            </div>
            <div className="col-12 text-center">
              <Button type="submit" className="mt-4 add-category-btn" disabled={uploading}>
                Save Product
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Information/Error Modal */}
      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>{infoMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowInfoModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AProducts;