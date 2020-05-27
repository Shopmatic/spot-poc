import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const products = [
    {
      title: "Saarina Pudi/Rasam Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/yp2XWDE9Q6_m.jpg",
      price: 162,
    },
    {
      title: "Huli Pudi/Sambar Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/VJoPnXpRXX_m.jpg",
      price: 142,
    },
    {
      title: "Vangibath Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/OJ681p2K5r_m.jpg",
      price: 300,
    },
    {
      title: "Saarina Pudi/Rasam Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/yp2XWDE9Q6_m.jpg",
      price: 162,
    },
    {
      title: "Huli Pudi/Sambar Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/VJoPnXpRXX_m.jpg",
      price: 142,
    },
    {
      title: "Vangibath Pudi",
      imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/OJ681p2K5r_m.jpg",
      price: 300,
    },
  ];
  return (
    <div className="products_list">
      <div className="row">
        {products.map((product, index) => (
          <div className="col s6 m6 l3" key={index}>
            <Link to={`/products/${index}`} className="products_list-product">
              <img src={product.imageUrl} alt="product" />
              <p className="products_list-product-title">{product.title}</p>
              <p className="products_list-product-price">
                <span>₹ </span>
                {product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
