import React, { useRef, useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.css";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "../context/Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuBar, setMenuBar] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const newRef = useRef(null);
  const toggleNav = (event) => {
    setMenuBar(!menuBar);
    newRef.current.classList.toggle("overFlow");
    setIsScrollDisabled(!menuBar);
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isScrollDisabled]);

  const currentWidth = window.innerWidth;
  return (
    <Navbar key={false} bg="transparency" expand={false} className="mb-3 px-3">
      <Container fluid className="px-0">
        <Navbar.Brand
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          <Link to={"/home"}>A..S</Link>
        </Navbar.Brand>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {currentWidth < 767 ? (
            ""
          ) : (
            <div className="mainUl">
              <ul>
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/skills"}>Skills</Link>
                </li>
                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="btn_show">
            {theme === "dark" ? (
              <MdOutlineLightMode onClick={toggleTheme} fontSize={"25px"} />
            ) : (
              <FaMoon onClick={toggleTheme} fontSize={"20px"} />
            )}
          </div>
          {currentWidth > 767 ? (
            ""
          ) : (
            <div className="btn_show" onClick={toggleNav}>
              {menuBar === false ? <HiBars3 /> : <RxCross2 />}
            </div>
          )}
        </div>
      </Container>

      <div ref={newRef} className="overflow">
        <ul>
          <li onClick={toggleNav}>
            <Link to={"/home"}>Home</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
