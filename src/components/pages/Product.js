import React from "react";
import GoBack from "../common/GoBack";
import SingleProduct from "../product/SingleProduct";

export default function Product() {
  return (
    <div className="product">
      <GoBack />
      <SingleProduct />
    </div>
  );
}
