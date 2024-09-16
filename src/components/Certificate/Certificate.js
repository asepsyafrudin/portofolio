import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CardCertificate from "./CardCertificate";
import { CertificatesData } from "../../data/certificatedata.js";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificate that I've gotten on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[0].title}
              date={CertificatesData[0].date}
              image={CertificatesData[0].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[1].title}
              date={CertificatesData[1].date}
              image={CertificatesData[1].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[2].title}
              date={CertificatesData[2].date}
              image={CertificatesData[2].image}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[3].title}
              date={CertificatesData[3].date}
              image={CertificatesData[3].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[4].title}
              date={CertificatesData[4].date}
              image={CertificatesData[4].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[5].title}
              date={CertificatesData[5].date}
              image={CertificatesData[5].image}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[6].title}
              date={CertificatesData[6].date}
              image={CertificatesData[6].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[7].title}
              date={CertificatesData[7].date}
              image={CertificatesData[7].image}
            />
          </Col>
          <Col md={4} className="project-card">
            <CardCertificate
              title={CertificatesData[8].title}
              date={CertificatesData[8].date}
              image={CertificatesData[8].image}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
