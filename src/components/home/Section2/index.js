import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./section2.css";
const Section2 = () => {
  return (
    <div className="section2">
      <Container>
        <Row className="sectionrow">
          <Col md={6} className="sectioncol">
            <p>
              <b>Das beste aus beiden Welten </b>
            </p>
            <p style={{ width: "80%" }}>
              Gecco ist das Ergebnis der Verbindung von fachkundigen
              Berechnungsmethoden mit fortschrittlichen
              Bilderkennungs-algorithmen und Datenanalysen. Entworfen und
              entwickelt in Zusammenarbeit mit führenden Experten auf dem Gebiet
              der
            </p>
          </Col>
          <Col md={6}>
            <img
              src="assests/images/Group 6934.png"
              style={{ width: "100%" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
