import React from "react";

export default function SingleProduct() {
  const product = {
    title: "Saarina Pudi/Rasam Pudi",
    imageUrl: "https://cdn.myshopmatic.com/images/XYWVQ5/yp2XWDE9Q6_m.jpg",
    price: 162,
    quantity: 20,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
    facilis! Quam recusandae repudiandae ad officia. Consectetur
    consequuntur consequatur expedita nam culpa architecto tempora? Tenetur
    repellendus iure doloremque`,
  };
  return (
    <div className="single_product">
      <div className="row">
        <div className="col s12 m12 l6">
          <img
            className="single_product-image"
            style={{ width: "100%" }}
            src={product.imageUrl}
            alt={product.title}
          ></img>
          <h2 className="single_product-title">{product.title}</h2>
          <p className="single_product-price">
            <span>₹ </span>
            {product.price}
          </p>
          <p className="single_product-description">{product.description}</p>
          <div className="single_product-incrementer">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <i
                style={{
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                }}
                className="large material-icons"
              >
                add
              </i>
              <input
                style={{
                  width: "5rem",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "2rem",
                }}
                type="number"
                value={1}
                disabled
              ></input>
              <i
                style={{
                  border: "1px solid rgba(128, 128, 128, 0.5)",
                }}
                className="large material-icons"
              >
                remove
              </i>
            </div>
          </div>
          <button
            style={{
              display: "block",
              backgroundColor: "#ff2744",
              fontSize: "1.8rem",
              padding: "1.5rem 2rem",
              border: "none",
              borderRadius: "2rem",
              color: "white",
              margin: "3rem auto",
              width: "50%",
            }}
            className="add_to_cart"
          >
            Add to cart - <span style={{ verticalAlign: "middle" }}>₹ </span>
          </button>
        </div>
      </div>
    </div>
  );
}
