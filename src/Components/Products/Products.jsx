import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductListing from "../ProductCard/ProductListing";
const Products = () => {
    
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setsearchTerm] = useState(null);

  const fetchData = () => {
    setLoader(true);
    let url = `https://dummyjson.com/products?limit=100`;
    if (searchTerm !== null && searchTerm !== "") {
      url = `https://dummyjson.com/products?limit=100&search?q=${searchTerm}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
        setLoader(false);
      })
      .catch((err) => {
        alert(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
    setTimeout(() => {
      fetchData();
    }, 500);
  };
  return (
    <section className="product py-5" id="products">
      <div className="container">
        <div className="product-content">
          <div className="section-title">
            <div className="seacrh-section flex flex-between">
              <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                Our Products
              </h3>
              <input
                className="searchbar"
                type="search"
                placeholder="Search here ..."
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
          {loader && (
            <div className="py-5 px-5 text-center bg-dark text-ghost-white">
              <h2>Loading Data...</h2>
            </div>
          )}
          {product.length > 0 && !loader ? (
            <ProductListing product={product} />
          ) : (
            !loader && (
              <div className="no-data py-5 px-5 text-center bg-dark text-ghost-white">
                <h1> Sorry No Data found...</h1>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
