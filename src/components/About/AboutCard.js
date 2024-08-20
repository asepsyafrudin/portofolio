import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asep Syafrudin </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I am currently employed as a software developer at PT Denso
            Indonesia.
            <br />
            I graduate from Politeknik Manufactur Astra as Associate Degree ,
            and I continue my study in Universitas Pancasila to get Bachelor
            Degree in Industrial Engineering
            <br />
            i really like to explore my self especially in programming .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fortune will never be exchanged, always try earnestly!"{" "}
          </p>
          <footer className="blockquote-footer">Asep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
