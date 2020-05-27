import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header_icon">
        <img
          src="https://cdn.myshopmatic.com/images/XYWVQ5/Xky1kqDX5o.jpg"
          alt="swaadspace"
        />
      </div>
      <div className="header_details">
        <h1 className="header_details-title">Swaadspace</h1>
        <p className="header_details-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam magnam
          sed sunt numquam, facere sequi optio voluptatum! Ratione ullam
          pariatur obcaecati dolor natus quae dolore optio perferendis, omnis
          illo suscipit
          <Link to="/about" className="about-link" href="/pages/about.html">
            View store details
          </Link>
        </p>
      </div>
    </header>
  );
}
