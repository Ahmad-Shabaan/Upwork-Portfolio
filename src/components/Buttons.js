import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/Theme";
export default function Buttons({repo , demo}) {
  const { theme } = useTheme();
  return (
    <div className="buttons">
      <a href={demo} target="_blank" rel="noopener noreferrer">
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
          Demo
        </motion.button>
      </a>

      <a href={repo} target="_blank" rel="noopener noreferrer">
        <motion.button
          className={theme === "dark" ? "btn_two" : "btn_lTwo"}
          initial={{ opacity: 0.6 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >
          Repo
        </motion.button>
      </a>
    </div>
  );
}
