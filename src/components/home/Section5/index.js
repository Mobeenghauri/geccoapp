import React, { useState } from "react";
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
import "./section5.css";
const Section5 = () => {
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(false);
  };
  return (
    <div className="section5">
      <Container>
        <Row>
          <Col md={4}>
            <Card className="card1 mt-5 mb-5">
              <Card.Body>
                <p>GECCO FREE</p>
                <div className="d-flex">
                  <img src="assests/images/ic_feature_unlimited.png"></img>
                  <p className="textalign">
                    <b>Limitierte Features</b>
                  </p>
                </div>
                <div className="d-flex">
                  <img src="assests/images/ic_feature_unlimited.jpg"></img>
                  <p className="textalign">
                    <b>3 Reports</b>
                  </p>
                </div>
                <p>im Monat </p>
                <p style={{ fontSize: "60px" }}>0€</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card2 mt-5 mb-5">
              <Card.Body>
                <p>GECCO PRO</p>
                <div className="d-flex">
                  <img src="assests/images/ic_feature_unlimited.png"></img>
                  <p className="textalign">
                    <b>Alle Features</b>
                  </p>
                </div>
                <div className="d-flex">
                  <img src="assests/images/ic_feature_unlimited.jpg"></img>
                  <p className="textalign">
                    <b>Unbegrenzte Reports</b>
                  </p>
                </div>
                <p>im Monat </p>
                <p style={{ fontSize: "60px" }}>499€</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="thirdcol mt-5 mb-5">
            <p>
              Gecco ist ab Q3 2022 verfügbar. Sichern Sie sich Ihren Platz und
              gehören Sie zu den Ersten, die Zugriff auf das Tool erhalten.
            </p>
            {isActive ? (
              <Form>
                <Form.Group className="mb-3 mt-5">
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="E-Mail adresse"
                  />
                </Form.Group>
                <Form.Select size="sm">
                  <option>Interessiert in..</option>
                  <option value="1">GECCO FREE</option>
                  <option value="2">GECCO PRO</option>
                </Form.Select>
                <Button
                  className="stylebtn mt-5 "
                  type="submit"
                  onClick={handleClick}
                >
                  Jetzt Platz sichern
                </Button>
              </Form>
            ) : (
              <div className="successful">
                <svg className="aftersubmit1" viewBox="0 0 448 512">
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
                <p className="s1">Anfrage abgeschickt!</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
