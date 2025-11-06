import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from "../../media/feature/fbg.png"; // ✅ background image

const features = [
  { icon: "fas fa-lightbulb", text: "Fresh & Innovative Designs" },
  { icon: "fas fa-cogs", text: "Quality Manufacturing Standards" },
  { icon: "fas fa-headset", text: "Dedicated Customer Support" },
  { icon: "fas fa-gem", text: "Premium Finish & Durability" },
  { icon: "fas fa-users", text: "Growing Dealer & Retail Network" },
  { icon: "fas fa-bath", text: "Smart Bathroom Solutions" },
];

const Section = () => {
  return (
    <section
      className="py-5 mt-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <style>
        {`
          .hover-card {
            transition: all 0.4s ease;
            overflow: hidden;
            background: #fff;
            border-radius: 10px;
            height: 230px; /* ✅ increased box height */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; /* ✅ centers content vertically */
          }
          .hover-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            background: linear-gradient(135deg, #e4efef, #d4e1dd);
          }
          .feature-icon {
            color: teal;
            transition: color 0.3s ease;
          }
          .hover-card:hover .feature-icon {
            color: #145b46ff;
          }
          .hover-card:hover p {
            color: #186d52ff;
          }
          @media (max-width: 576px) {
            .hover-card {
              height: 200px;
            }
          }
        `}
      </style>

      <Container>
        <h2 className="text-center fw-bold mb-2 text-white">
          Bravix Excellence 
        </h2>
        <div className="d-flex justify-content-center mb-5">
          <div 
            style={{ 
              width: "150px", 
              height: "3px", 
              backgroundColor: "#00bfa5", 
              borderRadius: "2px" 
            }} 
          />
        </div>

        <Row className="g-4 justify-content-center">
          {features.map((feature, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card className="p-4 text-center border-0 shadow-sm hover-card">
                <i className={`${feature.icon} fs-1 mb-3 feature-icon`}></i>
                <p className="text-dark fw-semibold mb-0 mt-5">{feature.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
