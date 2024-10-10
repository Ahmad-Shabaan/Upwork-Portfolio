import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Portfolio.css";
import BlurhashComp from "./BlurhashComp";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import template1 from "../images/template1.png";
import template2 from "../images/template2.png";
import template3 from "../images/template3.png";
import template4 from "../images/template4.png";
import template5 from "../images/template5.png";
import template6 from "../images/template6.png";
import react1 from "../images/react1.png";
import react3 from "../images/react3.png";
import react2 from "../images/react2.png";
import react4 from "../images/react4.png";
import nike from "../images/nike.png";

import Buttons from "./Buttons";
export const Portfolio = () => {
  const projects = [
    {
      projectName: "Ecommerce",
      demo: "https://jammal-67432.firebaseapp.com/",
      repo: "https://github.com/Ahmad-Shabaan/E-commerce",
      description: "Simple Ecommerce using react js + firebase",
      imgUrl: react4,
    },
    {
      projectName: "Nike Store",
      demo: "https://nike-sigma-opal.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/nike.git",
      description:"I developed a sleek Nike store using **React.js** for a dynamic UI, styled with **Tailwind CSS** for a responsive design, and enhanced with **Framer Motion** for smooth animations. This project showcases my skills in creating modern, interactive, and visually appealing web applications.",
      imgUrl: nike,
    },
    {
      projectName: "Restaurant",
      demo: "https://restaurant-ten-inky.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/restaurant",
      description: "Developed a stylish Restaurant template using React.",
      imgUrl: react2,
    },
    {
      projectName: "Shopwise",
      demo: "https://shopwise-two.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/shopwise",
      description: "Developed a stylish Shopwise template using React.",
      imgUrl: react3,
    },
    {
      projectName: "Portfolio",
      demo: "https://portfolio-ahmed301090.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/portfolio",
      description: "Developed a stylish Portfolio using React.",
      imgUrl: react1,
    },
    {
      projectName: "Template Design 6",
      demo: "https://template2023.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/template2023",
      description: "Developed a stylish template using HTML and CSS.",
      imgUrl: template6,
    },
    {
      projectName: "Template Design 5",
      demo: "https://engage-five.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/Engage",
      description:
        "Developed a stylish template using HTML and CSS.(not responsive)",
      imgUrl: template5,
    },
    {
      projectName: "Template Design 4",
      demo: "https://task-two-one.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/task_two",
      description:
        "Developed a stylish template using HTML and CSS.(not responsive)",
      imgUrl: template4,
    },
    {
      projectName: "Template Design 3",
      demo: "https://template-three-wheat.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/template_three",
      description: "Developed a stylish template using HTML and CSS.",
      imgUrl: template3,
    },
    {
      projectName: "Template Design 2",
      demo: "https://template-two-blond.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/template_two",
      description: "Developed a stylish template using HTML and CSS.",
      imgUrl: template2,
    },
    {
      projectName: "Template Design 1",
      demo: "https://template-ruby-five.vercel.app/",
      repo: "https://github.com/Ahmad-Shabaan/template_one",
      description: "Developed a stylish template using HTML and CSS.",
      imgUrl: template1,
    },
  ];
  return (
    <Container>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Row>
        <h1
          style={{
            borderBottom: "1px solid var(--body_color",
            padding: "8px",
          }}
        >
          Portfolio
        </h1>
      </Row>
      <motion.div
        className=" my-4 portfolioCon"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <div className="colItems">
          {projects.map((project, index) => {
            return (
              <div key={index} className="cardPortfolio">
                <div className="figure">
                  <BlurhashComp src={project.imgUrl} />
                  <div className="caption">
                    <p>{project.description}</p>
                    <Buttons repo={project.repo} demo={project.demo} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
};
