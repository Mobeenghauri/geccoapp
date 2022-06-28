import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./section4.css";
const Section4 = () => {
  return (
    <div className="section4">
      <Container>
        <Row className="sectionrow">
          <Col md={6} className="sectioncol">
            <p>
              <b>Der smarte CO2-Rechner für Unternehmen</b>
            </p>
            <p style={{ width: "80%" }}>
              Was nutzt ein guter CCF, wenn nur wenige davon wissen - erst recht
              in Zeiten des Umschwungs? Mit einem unabhängigen CO2-Zertifikat
              sichern sie sich ihren Wettbewerbsvorteil und Ihren zukünftigen
              Umsatz. Gecco2 ist kein Nice-to-have sondern Ihr Risikomanagement.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="assests/images/Group 6930.png"
              style={{ width: "100%" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
