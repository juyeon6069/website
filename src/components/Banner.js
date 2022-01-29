import React from "react";
import "./Banner.css";



const Banner = () => {
  return (
    <div
      className="menu"
      style={{
        // position: "fixed",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        textAlign: "right"
      }}
    >
      
      <li class>
        <a className="menu-item" class="smoothScroll" href="#about">About</a>
      </li>
      <li class>
        <a className="menu-item" class="smoothScroll" href="#Home">Home</a>
      </li>
    </div>
  );
};

export default Banner;