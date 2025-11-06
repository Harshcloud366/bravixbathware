// import { useState, useEffect } from "react"; 
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Modal, Button, Card } from "react-bootstrap";

// function Series() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();

//   const [series, setSeries] = useState([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     image: null, // ✅ File store karenge
//   });

//   useEffect(() => {
//     fetchSeries();
//     fetchCategoryName();
//   }, []);

//   const fetchSeries = async () => {
//     try {
//       const res = await axios.get(`/api/admin/categories/${categoryId}/series`);
//       setSeries(res.data);
//     } catch (error) {
//       console.error("Error fetching series", error);
//     }
//   };

//   const fetchCategoryName = async () => {
//     try {
//       const res = await axios.get(`/api/admin/categories/${categoryId}`);
//       setCategoryName(res.data.name);
//     } catch (error) {
//       console.error("Error fetching category name", error);
//     }
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image" && files && files.length > 0) {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Add Series (with image upload)
//   const handleCreateSeries = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       if (formData.image) {
//         data.append("image", formData.image);
//       }

//       await axios.post(`/api/admin/categories/${categoryId}/series`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setShowModal(false);
//       setFormData({ name: "", image: null });
//       fetchSeries();
//     } catch (error) {
//       console.error("Error creating series", error);
//     }
//   };

//   // Delete Series
//   const deleteSeries = async (id) => {
//     if (window.confirm("Delete this series?")) {
//       try {
//         await axios.delete(`/api/admin/series/${id}`);
//         fetchSeries();
//       } catch (error) {
//         console.error("Error deleting series", error);
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
//           <h2 className="d-inline-block ms-3">{categoryName} - Series</h2>
//         </div>
//         <Button onClick={() => setShowModal(true)}>+ Add Series</Button>
//       </div>

//       {/* ✅ Series Cards */}
//       <div className="row">
//         {series.map((ser) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={ser._id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img
//   variant="top"
//   src={ser.imageUrl} 
//   alt={ser.name}
//   style={{ height: "200px", objectFit: "cover" }}
// />
// {/* ✅ imageUrl backend se aayega */}

//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0">{ser.name}</h5>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => deleteSeries(ser._id)}
//                 >
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Add Series Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Series</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateSeries} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Series Name</label>
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
//                 className="form-control"
//                 accept="image/*"
//                 onChange={handleChange}
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

// export default Series;


// import { useState, useEffect } from "react"; 
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Modal, Button, Card, Spinner } from "react-bootstrap";
// import imageCompression from "browser-image-compression";

// function Series() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();
//   const [series, setSeries] = useState([]);
//   const [categoryName, setCategoryName] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const [formData, setFormData] = useState({ name: "", image: null });

//   useEffect(() => {
//     fetchSeries();
//     fetchCategoryName();
//   }, []);

//   const fetchSeries = async () => {
//     try {
//       const res = await axios.get(`/api/admin/series/category/${categoryId}`);
//       setSeries(res.data);
//     } catch (error) {
//       console.error("Error fetching series", error);
//     }
//   };

//   const fetchCategoryName = async () => {
//     try {
//       const res = await axios.get(`/api/admin/categories/${categoryId}`);
//       setCategoryName(res.data.name);
//     } catch (error) {
//       console.error("Error fetching category name", error);
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

//   const handleCreateSeries = async (e) => {
//     e.preventDefault();
//     if (!formData.image) return alert("Select an image");

//     setUploading(true);
//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("categoryId", categoryId);
//       data.append("image", formData.image);

//       await axios.post(`/api/admin/series`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setShowModal(false);
//       setFormData({ name: "", image: null });
//       fetchSeries();
//     } catch (error) {
//       console.error("Error creating series", error);
//       alert(error.response?.data?.message || error.message);
//     }
//     setUploading(false);
//   };

//   const deleteSeries = async (id) => {
//     if (window.confirm("Delete this series?")) {
//       try {
//         await axios.delete(`/api/admin/series/${id}`);
//         fetchSeries();
//       } catch (error) {
//         console.error("Error deleting series", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <Button variant="secondary" onClick={() => navigate(-1)}>← Back</Button>
//           <h2 className="d-inline-block ms-3">{categoryName} - Series</h2>
//         </div>
//         <Button onClick={() => setShowModal(true)}>+ Add Series</Button>
//       </div>

//       <div className="row">
//         {series.map((ser) => (
//           <div className="col-md-4 col-sm-6 mb-3" key={ser._id}>
//             <Card
//               className="h-100 shadow-sm"
//               style={{ cursor: "pointer" }}
//               onClick={() => navigate(`/admin/series/${ser._id}/products`)}
//             >
//               <Card.Img
//                 variant="top"
//                 src={ser.imageUrl}
//                 alt={ser.name}
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0">{ser.name}</h5>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={(e) => { e.stopPropagation(); deleteSeries(ser._id); }}
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
//           <Modal.Title>Add Series</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleCreateSeries} className="row g-3">
//             <div className="col-12">
//               <label className="form-label">Series Name</label>
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
//                 className="form-control"
//                 accept="image/*"
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

// export default Series;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal, Button, Card, Spinner } from "react-bootstrap";
// Since browser-image-compression is a third-party library, we'll comment it out
// to avoid compilation issues in this environment.
import imageCompression from "browser-image-compression";

function Series() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [seriesIdToDelete, setSeriesIdToDelete] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({ name: "", image: null });

  useEffect(() => {
    fetchSeries();
    fetchCategoryName();
  }, [categoryId]);

  // ✅ Fetch Series from the backend
  const fetchSeries = async () => {
    try {
      const res = await axios.get(`/api/admin/series/category/${categoryId}`);
      setSeries(res.data);
    } catch (error) {
      console.error("Error fetching series", error);
    }
  };

  // ✅ Fetch Category Name for Breadcrumb
  const fetchCategoryName = async () => {
    try {
      const res = await axios.get(`/api/admin/categories/${categoryId}`);
      setCategoryName(res.data.name);
    } catch (error) {
      console.error("Error fetching category name", error);
    }
  };

  // const handleChange = async (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === "image" && files?.length) {
  //     setUploading(true);
  //     try {
  //       // Since browser-image-compression is not available, we'll use a simple approach
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
          maxSizeMB: 1, // compress target ~1MB
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

  const handleCreateSeries = async (e) => {
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
      data.append("categoryId", categoryId);
      data.append("image", formData.image);

      await axios.post(`/api/admin/series`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setShowModal(false);
      setFormData({ name: "", image: null });
      fetchSeries();
      setInfoMessage("Series created successfully!");
      setShowInfoModal(true);
    } catch (error) {
      console.error("Error creating series", error);
      setInfoMessage(error.response?.data?.message || error.message);
      setShowInfoModal(true);
    }
    setUploading(false);
  };

  const handleDeleteClick = (id) => {
    setSeriesIdToDelete(id);
    setShowConfirmModal(true);
  };

  const deleteSeries = async () => {
    if (seriesIdToDelete) {
      try {
        await axios.delete(`/api/admin/series/${seriesIdToDelete}`);
        fetchSeries();
        setShowConfirmModal(false);
        setInfoMessage("Series deleted successfully!");
        setShowInfoModal(true);
      } catch (error) {
        console.error("Error deleting series", error);
        setShowConfirmModal(false);
        setInfoMessage("Failed to delete series. Please try again later.");
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
        <div>
          <Button variant="secondary" onClick={() => navigate(-1)} className="me-3">← Back</Button>
          <h2 className="d-inline-block">{categoryName} - Series</h2>
        </div>
        <Button onClick={() => setShowModal(true)} className="add-category-btn">
          + Add Series
        </Button>
      </div>

      <div className="row">
        {series.length > 0 ? (
          series.map((ser) => (
            <div className="col-md-6 col-lg-4 mb-4" key={ser._id}>
              <Card
                className="custom-card"
                onClick={() => navigate(`/admin/series/${ser._id}/products`)}
              >
                <div className="custom-card-image-container">
                  <Card.Img
                    variant="top"
                    src={ser.imageUrl}
                    alt={ser.name}
                    className="custom-card-image"
                  />
                </div>
                <Card.Body className="custom-card-body">
                  <h5 className="mb-0">{ser.name}</h5>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(ser._id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No series found. Add a new one.</p>
        )}
      </div>

      {/* Add Series Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Series</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleCreateSeries} className="row g-3">
            <div className="col-12">
              <label className="form-label">Series Name</label>
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
                Save Series
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
        <Modal.Body>Are you sure you want to delete this series?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteSeries}>
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

export default Series;