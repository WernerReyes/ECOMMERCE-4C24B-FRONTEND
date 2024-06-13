import React from "react";

function ProductSection() {
  const products = [
    {
      title: "Nordic Chair",
      price: "$50.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Nordic Chair",
      price: "$50.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Kruzo Aero Chair",
      price: "$78.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Ergonomic Chair",
      price: "$43.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Nordic Chair",
      price: "$50.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Nordic Chair",
      price: "$50.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Kruzo Aero Chair",
      price: "$78.00",
      image: "../../../public/image/product-1.png",
    },
    {
      title: "Ergonomic Chair",
      price: "$43.00",
      image: "../../../public/image/product-1.png",
    },
  ];

  

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={product.image}
                  className="img-fluid product-thumbnail"
                  alt={product.title}
                />
                <h3 className="product-title">{product.title}</h3>
                <strong className="product-price">{product.price}</strong>
                <span className="icon-cross">
                  <img
                    src="../../../public/image/cross.svg"
                    className="img-fluid"
                    alt="cross"
                  />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
