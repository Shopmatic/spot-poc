import React from "react";

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
        <a href="/" className="header_direction">
          Directions
        </a>
      </div>
    </header>
  );
}
