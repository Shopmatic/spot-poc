import React from "react";

export default function ProductsCategory() {
  const categories = [
    {
      id: 1,
      title: "All Products",
    },
    {
      id: 2,
      title: "Pure ground spice",
    },
    {
      id: 3,
      title: "Blended spice",
    },
    {
      id: 4,
      title: "Garam spice",
    },
    {
      id: 5,
      title: "Chilly spice",
    },
  ];
  return (
    <div className="products_category">
      {categories.map((category) => (
        <button
          className={`products_category-item ${
            category.id === 1 && "selected"
          }`}
          key={category.id}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}
