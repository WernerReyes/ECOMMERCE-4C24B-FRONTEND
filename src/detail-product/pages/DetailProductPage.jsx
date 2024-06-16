import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DetailProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row p-4 bg-white mt-4">
          <ProductImage />
          <ProductDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailProductPage;
