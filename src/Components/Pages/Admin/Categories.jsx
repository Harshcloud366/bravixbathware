// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button, Card, Spinner } from "react-bootstrap";

// function Categories() {
//   const [categories, setCategories] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     imageUrl: ""
//   });

//   // ✅ Fetch Categories
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("/api/admin/categories");
//       setCategories(res.data);
//     } catch (error) {
//       console.error("Error fetching categories", error);
//     }
//   };

//   // ✅ Handle Input
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Upload Image to Cloudinary
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "your_preset_here"); // 🔄 replace
//     data.append("cloud_name", "your_cloud_name");     // 🔄 replace

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
//         method: "POST",
//         body: data,
//       });

//       const cloudData = await res.json();
//       setFormData({ ...formData, imageUrl: cloudData.secure_url });
//     } catch (err) {
//       console.error("Cloudinary upload failed", err);
//     }

//     setUploading(false);
//   };

//   // ✅ Add Category
//   const handleCreateCategory = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/admin/categories", formData);
//       setShowModal(false);
//       setFormData({ name: "", imageUrl: "" });
//       fetchCategories();
//     } catch (error) {
//       console.error("Error creating category", error);
//     }
//   };

//   // ✅ Delete Category
//   const deleteCategory = async (id) => {
//     if (window.confirm("Delete this category?")) {
//       try {
//         await axios.delete(`/api/admin/categories/${id}`);
//         fetchCategories();
//       } catch (error) {
//         console.error("Error deleting category", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Manage Categories</h2>
//         <Button onClick={() => setShowModal(true)}>+ Add Category</Button>
//       </div>

//       {/* ✅ Category Cards */}
//       <div className="row">
//         {categories.map((cat) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={cat._id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={cat.imageUrl}
//                 alt={cat.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0">{cat.name}</h5>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => deleteCategory(cat._id)}
//                 >
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Add Category Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateCategory} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Category Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* ✅ Only File Upload */}
//             <div className="col-12">
//               <label className="form-label">Upload Image</label>
//               <input
//                 type="file"
//                 className="form-control"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 required
//               />
//               {uploading && (
//                 <div className="mt-2 d-flex align-items-center">
//                   <Spinner animation="border" size="sm" className="me-2" />
//                   Uploading...
//                 </div>
//               )}
//             </div>

//             <div className="col-12">
//               <Button type="submit" className="mt-2" disabled={uploading}>
//                 Save
//               </Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default Categories;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button, Card, Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import imageCompression from "browser-image-compression";

// function Categories() {
//   const [categories, setCategories] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: "", image: null });

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("/api/admin/categories");
//       setCategories(res.data);
//     } catch (error) {
//       console.error("Error fetching categories", error);
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

//   const handleCreateCategory = async (e) => {
//     e.preventDefault();
//     if (!formData.image) return alert("Please select an image");

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("image", formData.image);

//       await axios.post("/api/admin/categories", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setShowModal(false);
//       setFormData({ name: "", image: null });
//       fetchCategories();
//     } catch (error) {
//       console.error("Error creating category", error);
//       alert(error.response?.data?.message || error.message);
//     }
//     setUploading(false);
//   };

//   const deleteCategory = async (id) => {
//     if (window.confirm("Delete this category?")) {
//       try {
//         await axios.delete(`/api/admin/categories/${id}`);
//         fetchCategories();
//       } catch (error) {
//         console.error("Error deleting category", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Manage Categories</h2>
//         <Button onClick={() => setShowModal(true)}>+ Add Category</Button>
//       </div>

//       <div className="row">
//         {categories.map((cat) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={cat._id}>
//             <Card
//               className="h-100 shadow-sm"
//               style={{ cursor: "pointer" }}
//               onClick={() => navigate(`/admin/categories/${cat._id}/series`)}
//             >
//               <Card.Img
//                 variant="top"
//                 src={cat.imageUrl}
//                 alt={cat.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0">{cat.name}</h5>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     deleteCategory(cat._id);
//                   }}
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
//           <Modal.Title>Add Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateCategory} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Category Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Upload Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 className="form-control"
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
//               <Button type="submit" className="mt-2" disabled={uploading}>
//                 Save
//               </Button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default Categories;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// Since browser-image-compression is a third-party library, we'll comment it out
// to avoid compilation issues in this environment.
import imageCompression from "browser-image-compression";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", image: null });

  useEffect(() => {
    // Calling the function to fetch data from the backend
    fetchCategories();
  }, []);

  // ✅ Fetch Categories from the backend
  const fetchCategories = async () => {
    try {
      const res = await axios.get("/api/admin/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  // const handleChange = async (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "image" && files?.length) {
  //     setUploading(true);
  //     try {
  //       // Since browser-image-compression is not available, we'll use a simple approach
  //       // for demonstration. In a real app, you would need to include the library.
  //       const compressedFile = files[0];
  //       setFormData({ ...formData, image: compressedFile });
  //     } catch (err) {
  //       console.error("Compression failed", err);
  //     }
  //     setUploading(false);
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };

  const handleChange = async (e) => {
  const { name, value, files } = e.target;
  if (name === "image" && files?.length) {
    setUploading(true);
    try {
      const options = {
        maxSizeMB: 1, // Compress to ~1MB
        maxWidthOrHeight: 1024, // Resize dimensions
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


  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      setInfoMessage("Please select an image");
      setShowInfoModal(true);
      return;
    }

    setUploading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("image", formData.image);

      await axios.post("/api/admin/categories", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowModal(false);
      setFormData({ name: "", image: null });
      fetchCategories();
      setInfoMessage("Category created successfully!");
      setShowInfoModal(true);
    } catch (error) {
      console.error("Error creating category", error);
      setInfoMessage(error.response?.data?.message || error.message);
      setShowInfoModal(true);
    }
    setUploading(false);
  };

  const handleDeleteClick = (id) => {
    setCategoryIdToDelete(id);
    setShowConfirmModal(true);
  };

  const deleteCategory = async () => {
    if (categoryIdToDelete) {
      try {
        await axios.delete(`/api/admin/categories/${categoryIdToDelete}`);
        fetchCategories();
        setShowConfirmModal(false);
        setInfoMessage("Category deleted successfully!");
        setShowInfoModal(true);
      } catch (error) {
        console.error("Error deleting category", error);
        setShowConfirmModal(false);
        setInfoMessage("Failed to delete category. Please try again later.");
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
            object-fit: contain; /* This ensures the entire image is visible without being cropped */
            transition: transform 0.3s ease;
        }
        
        .custom-card:hover .custom-card-image {
            transform: scale(1.05);
        }

        .custom-card-body {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
        }

        .modal-footer button {
            border-radius: 50px;
            padding: 0.5rem 1.5rem;
        }
      `}} />
      <div className="manage-header">
        <h2>Manage Categories</h2>
        <Button onClick={() => setShowModal(true)} className="add-category-btn">
          + Add Category
        </Button>
      </div>

      <div className="row">
        {categories.length > 0 ? (
          categories.map((cat) => (
            <div className="col-md-6 col-lg-4 mb-4" key={cat._id}>
              <Card
                className="custom-card"
                onClick={() => navigate(`/admin/categories/${cat._id}/series`)}
              >
                <div className="custom-card-image-container">
                  <Card.Img
                    variant="top"
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="custom-card-image"
                  />
                </div>
                <Card.Body className="custom-card-body">
                  <h5 className="mb-0">{cat.name}</h5>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(cat._id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No categories found. Add a new one.</p>
        )}
      </div>

      {/* Add Category Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleCreateCategory} className="row g-3">
            <div className="col-12">
              <label className="form-label">Category Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
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
                Save Category
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
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteCategory}>
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

export default Categories;