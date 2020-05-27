import React from "react";
import { Link } from "react-router-dom";

export default function GoBack() {
  return (
    <Link to="/" className="goback">
      <i className="goback_icon material-icons">arrow_back</i>
      <span className="goback_text">Store</span>
    </Link>
  );
}
