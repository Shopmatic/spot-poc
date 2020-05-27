import React from "react";

export default function Contacts() {
  return (
    <div className="contact">
      <div className="contact_info">
        <h2 className="contact_info-title contact_info-title-address">
          Address:
        </h2>
        <p className="contact_info-detail  contact_info-detail-address">
          1-B, Patel Road, Muthal Nagar, MGR Nagar, Pandian Nagar, Virudhunagar,
          Tamil Nadu 626001, India.
        </p>
      </div>
      <div className="contact_info">
        <h2 className="contact_info-title">Phone: </h2>
        <p className="contact_info-detail">+91 9600 736 453</p>
      </div>
    </div>
  );
}
