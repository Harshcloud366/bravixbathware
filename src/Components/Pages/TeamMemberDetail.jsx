import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

import nihal from "../../media/products/f1.jpg";
import aditya from "../../media/products/f1.jpg";
import bgImage from "../../img/banner/b2.jpg"; // ← your background image

const teamMembers = [
  {
    id: 1,
    name: "Nihal Nawal",
    designation: "Director",
    img: nihal,
    linkedin: "#",
    about:
      "Guided by a passion for product excellence and process discipline, Nihal Nawal oversees operations, manufacturing, and supply chain management at Bravix Bathware. His strategic focus ensures that every product reflects precision engineering and uncompromising quality standards. Nihal’s commitment to innovation and efficiency has positioned Bravix as a benchmark for reliability in the bathware industry.",
    achievements: [
      "Spearheaded automation in the production line, improving efficiency by 30%.",
      "Strengthened the vendor and logistics network, ensuring timely delivery across India.",
      "Consistently upheld ISO-grade quality control in all manufacturing units.",
    ],
  },
  {
    id: 2,
    name: "Aditya Bangar",
    designation: "Director",
    img: aditya,
    linkedin: "#",
    about:
      "A brand-first thinker, Aditya Bangar drives Bravix’s vision for strategic growth, design leadership, and customer-centric innovation. His creative insight and marketing expertise have transformed Bravix into a modern, design-driven brand synonymous with elegance and functionality. Aditya champions the fusion of aesthetics and performance, making Bravix a preferred name in contemporary bathware.",
    achievements: [
      "Launched multiple award-winning bathware collections with a focus on design and sustainability.",
      "Expanded the brand’s digital presence and retail footprint across major cities.",
      "Pioneered customer experience programs that enhanced client satisfaction and retention.",
    ],
  },
];

const TeamMemberDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header Section with Background */}
     <div
  style={{
    backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${bgImage})`,
    loading:"lazy",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#002B4D",
    padding: "100px 0",
    textAlign: "center",
  }}
>



        <h1
          className="fw-bold text-uppercase"
          style={{ color: "white", fontSize: "2.8rem" }}
        >
          Leadership Team
        </h1>
        <hr
          style={{
            width: "80px",
            margin: "auto",
            borderTop: "3px solid white",
          }}
        />
      </div>

      <Container className="my-5 ">
        {teamMembers.map((member, index) => (
          <Row
            key={member.id}
            className={`align-items-center my-5 ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
              <img
                src={member.img}
                alt={member.name}
                className="img-fluid rounded-circle shadow-sm"
                style={{
                  width: "260px",
                  height: "260px",
                  objectFit: "cover",
                }}
              />
              <div className="mt-3">
                <h4 className="fw-bold">{member.name}</h4>
                <p className="text-muted">{member.designation}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </Col>

            {/* CONTENT */}
            <Col xs={12} md={7}>
              <div className="bg-white p-4 shadow-sm rounded">
                <h4 className="fw-semibold mb-3" style={{ color: "#088178" }}>
                  About {member.name}
                </h4>
                <p className="text-secondary" style={{ lineHeight: "1.8" }}>
                  {member.about}
                </p>

                <h5 className="fw-semibold mt-4" style={{ color: "#088178" }}>
                  Achievements & Leadership
                </h5>
                <ul className="text-secondary">
                  {member.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default TeamMemberDetail;
