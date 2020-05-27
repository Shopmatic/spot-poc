import React from "react";
import ProductsCategory from "./ProductsCategory";
import ProductsList from "./ProductsList";

export default function ProductsSection() {
  return (
    <section className="products">
      <ProductsCategory />
      <ProductsList />
    </section>
  );
}
