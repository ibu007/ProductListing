import React, { useEffect, useState } from "react";
import "./ProductsDetails.scss";
import { useSearchParams } from "react-router-dom";

const ProductsDetails = () => {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchTerm, setsearchTerm] = useState(null);
  let [searchParams] = useSearchParams();
  let id = searchParams.get("id");

  const fetchData = () => {
    setLoader(true);
    let url = `https://dummyjson.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        alert(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loader && (
        <div className="py-5 px-5 text-center bg-dark text-ghost-white">
          <h2>Loading Data...</h2>
        </div>
      )}
      {!loader && product !== null && (
        <div className="bg-ghost-white">
          <div className="card-wrapper ">
            <h1 className="text-center project-detail-heading">
              Product Details
            </h1>
            <div className="card-wrapper-inner">
              <div className="card">
                <div className="product-imgs">
                  <div className="img-display">
                    <div className="img-showcase">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                  </div>
                  <div className="img-select">
                    <div className="img-item">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                    <div className="img-item">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                    <div className="img-item">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                    <div className="img-item">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                    <div className="img-item">
                      <img
                        loading="lazy"
                        src={product?.thumbnail}
                        alt="product images"
                      />
                    </div>
                  </div>
                </div>

                <div className="product-content">
                  <h2 className="product-title">{product?.title}</h2>
                  <p className="product-link">{product?.category}</p>
                  <div className="product-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>{product?.rating} rating</span>
                  </div>

                  <div className="product-price">
                    <p className="last-price">
                      Old Price: <span>${product?.price + 75}</span>
                    </p>
                    <p className="new-price">
                      New Price: <span>${product?.price} (5%)</span>
                    </p>
                  </div>

                  <div className="product-detail">
                    <h2>about this item: </h2>
                    <p>{product?.description}</p>
                    {product?.description}
                    <ul>
                      <li>
                        Brand: <span>{product?.brand}</span>
                      </li>
                      <li>
                        Discount Percentage:{" "}
                        <span>{product?.discountPercentage}%</span>
                      </li>
                      <li>
                        Item Left: <span>{product?.stock}</span>
                      </li>
                      <li>
                        Category: <span> {product?.category}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="purchase-info">
                    <input type="number" min="0" value="1" />
                    <button type="button" className="btn fs-15">
                      Add to Cart <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button type="button" className="btn fs-15">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetails;
