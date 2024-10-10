import React from "react";
import "./Home.css";
import portfolioImage from "../images/ahmed.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { useTheme } from "../context/Theme";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Container className="my-container">
        <Helmet>
          <title>A.S | Home</title>
        </Helmet>
        <Col className="leftContent">
          <Row>
            <h2>I'm Ahmed Shabaan</h2>
          </Row>
          <Row className="fs-4 typeWriter">
            <Typewriter
              options={{
                strings: [
                  "Welcome to my portfolio website!",
                  'My name is Ahmed Shabaan.',
                  "I am 23 years old.",
                  "I graduated from the Faculty of Engineering in 2024,",
                  "specializing in Computer and Information Systems Engineering.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 40,
                pauseFor: 900,
              }}
            />
          </Row>
          <Row>
            <p>
            I am a Full Stack Developer specializing in the MERN stack, with experience in building user-friendly applications using React, Node.js, and MongoDB.
            I focus on writing clean, maintainable code, thoroughly testing my work, and ensuring project success. 
            I’m also available for post-launch maintenance and improvements.
            </p>
          </Row>
          <Row className="w-100 d-flex justify-content-between align-items-center">
            <Col>
              <Link to="/portfolio">
                <motion.button
                  className={theme === "dark" ? "btn_one" : "btn_lOne"}
                  initial={{ opacity: 0.6 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  My PortFolio
                </motion.button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col className="rightContent h-100">
          <div className="photoCon">
            <motion.img
              src={portfolioImage}
              alt="portfolio"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{
                opacity: 0,
                width: 0,
                transition: { duration: 0.2 },
              }}
            />
          </div>
        </Col>
      </Container>
    </>
  );
}
