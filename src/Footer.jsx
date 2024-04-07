import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer container-fluid text-center py-4 mt-3">
      Developed with <FaHeart /> by{" "}
      <a
        href="https://www.linkedin.com/in/aditya-sharma-b528642b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        className="fw-bold"
      >
        Aditya Sharma
      </a>
    </div>
  );
}

export default Footer;
