import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import AsepImg from "../../Assets/asep.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              "I have been working as Project Manager for 5 years and I have a
              strong passion for the world of programming and enjoy exploring
              new technologies.
              {/* 🤷‍♂️ */}
              <br />
              <br />
              The programming languages I currently use include
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, HTML, CSS, and Java.
                </b>
              </i>
              <br />
              <br />
              My fields of interest revolve around building innovative
              <i>
                <b className="purple">Web Technologies and Digital Products</b>
              </i>
              that create real-world impact. I am particularly passionate about
              working in areas related to
              <b className="purple">IoT and Artificial Intelligence</b>, where
              software meets the physical world. Some of the systems I develop
              are tightly integrated with hardware such as
              <b className="purple">Arduino and PLCs</b>, enabling smart
              automation and industrial solutions. I also build cross-platform
              mobile applications using
              <b className="purple">React Native</b>. In addition, I have a
              strong interest in developing
              <b className="purple">Computer Vision Systems</b> using
              technologies such as
              <b className="purple">YOLO Object Detection</b> and{" "}
              <b className="purple">OpenCV</b> for intelligent visual analysis.
              <br />
              <br />
              Whenever possible, I bring ideas to life by developing scalable
              products using
              <b className="purple">Node.js</b> and modern JavaScript ecosystems
              including
              <b className="purple">React, Bootstrap, and Express.js</b>.
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
              <p>I thrive on facing new challenges</p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={AsepImg} className="img-fluid asepImage" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/asepsyafrudin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/aasseep"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/asep-syafrudin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/asseeppsyafrudin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
