import React, { Fragment } from "react";
import Header from "../home/Header";
import Banner from "../home/Banner";
import ProductsSection from "../home/ProductsSection";
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <ProductsSection />
    </Fragment>
  );
}
