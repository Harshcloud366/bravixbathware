import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import nihal from "../../media/products/f1.jpg";
import aditya from "../../media/products/f1.jpg";

const MeetTheTeam = () => {
  const navigate = useNavigate();

  const team = [
    {
      id: 1,
      name: "Nihal Nawal",
      role: "Director",
      img: nihal,
      linkedin: "https://linkedin.com/in/nihal",
    },
    {
      id: 2,
      name: "Aditya Bangar",
      role: "Director",
      img: aditya,
      linkedin: "https://linkedin.com/in/aditya",
    },
  ];

  return (
    <section
      className="team-section text-center py-5  "
      style={{
        backgroundColor: "#fff",
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-uppercase mb-5"
          style={{ letterSpacing: "1.5px", color: "#111" }}
        >
          Meet The Team
        </h2>

        <div className="row justify-content-center align-items-center g-5">
          {team.map((member) => (
            <div
              key={member.id}
              className="col-10 col-sm-8 col-md-5"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/team/leadership")}
            >
              <div
                className="p-4 rounded-4 shadow-sm team-card"
                style={{
                  backgroundColor: "#f9f9f9",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
              >
                <div
                  className="team-img-wrapper mx-auto mb-3"
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <h5 className="fw-bold mt-3 mb-1" style={{ color: "#222" }}>
                  {member.name}
                </h5>
                <p className="text-muted mb-3" style={{ fontSize: "15px" }}>
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-outline-dark rounded-circle"
                  style={{
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  in
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect style */}
      <style>{`
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          background-color: #fff;
        }
        .team-card:hover .btn-outline-dark {
          background-color: #008080;
          color: #fff;
          border-color: #008080;
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;
