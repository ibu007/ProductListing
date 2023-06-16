import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListing = ({ product }) => {
  let navigate = useNavigate();

  const handleSingleData = (id) => {
    navigate(`/productDetail?id=${id}`);
  };
  return (
    <div className="product-items  grid">
      {product.map((product) => (
        <div
          className="product-item bg-white"
          key={product.id}
          onClick={() => handleSingleData(product.id)}
        >
          <div className="product-item-img">
            <img className="product-img" src={product.images[0]} alt="" />
            <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
              {product?.category}
            </div>
          </div>
          <div className="product-item-body">
            <h6 className="product-item-title text-pine-green fw-4 fs-15">
              {product.title}
            </h6>
            <div className="product-item-price text-regal-blue fw-7 fs-18">
              {product.price}$
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
