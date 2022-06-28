import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./hero.css";
const HeroSection = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="text">
          <Col md={6} className="mt-5">
            <h1> Der CO2 Rechner für Unternehmen </h1>
            <p style={{ width: "80%" }}>
              2023 werden alle Unternehmen ab 500 Mitarbeitern dazu
              verpflichtet, einen CO2 Fußabdruck transparent zu kommunizieren.
            </p>
            <p style={{ width: "80%" }}>
              <b>
                Von der BWA zueinem Ergebnis innerhalb weniger Minuten. Starten
                Sie jetzt ihre CO2 Berechnung.
              </b>
            </p>
            <p style={{ width: "80%" }}>
              <b>Coming soon 2020</b>
            </p>
          </Col>
          <Col md={6} className="imgcol">
            <img src="assests/images/Group 6926.png" className="heroimg2"></img>
          </Col>
        </Row>
      </Container>
      <div className="scroll">
        <img src="assests/images/Scroll down.png"></img>
      </div>
      <div className="maski">
        <img src="assests/images/Mask Group 1.png" className="maskimg"></img>
      </div>
    </div>
  );
};

export default HeroSection;
