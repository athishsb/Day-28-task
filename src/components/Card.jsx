import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ContextProvider";

export default function Card() {
  const {
    products,
    totalAmount,
    setTotalAmount,
    totalQuantity,
    setTotalQuantity,
  } = useContext(ProductContext);
  let sum = 0;
  return (
    <>
      {products.map((product, i) => {
        const finalPrice = (
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2);
        const [quantity, setQuantity] = useState(1);
        const [subTotal, setSubtotal] = useState(
          (finalPrice * quantity).toFixed(2)
        );

        useEffect(() => {
          setSubtotal((finalPrice * quantity).toFixed(2));
        }, [quantity]);

        useEffect(() => {
          sum = sum + +subTotal;
          setTotalAmount(sum);
        }, []);
        const handleDecrement = (finalPrice, quantity) => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalQuantity(totalQuantity - 1);
            sum = totalAmount - +finalPrice;
            setTotalAmount(sum);
          }
        };
        const handleIncrement = (i, finalPrice, quantity) => {
          if (products[i].stock > quantity) {
            setQuantity(quantity + 1);
            setTotalQuantity(totalQuantity + 1);
            setTotalAmount(totalAmount + +subTotal);
            sum = totalAmount + +finalPrice;
            setTotalAmount(sum);
          }
        };
        const price = product.price;
        const discountAmount = price * (product.discountPercentage / 100);
        return (
          <div
            key={i}
            className="container col-12 d-flex justify-content-center align-items-center"
          >
            <div
              className="card mb-3"
              style={{ width: "80%", borderRadius: "20px" }}
            >
              <div className="row g-0">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                  <img
                    src={product.images}
                    alt="..."
                    className="img-fluid product-img"
                    style={{ borderRadius: "30px" }}
                  />
                </div>

                <div className="col-md-7">
                  <div className="row g-0">
                    <div className="col-md">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title">{product.title}</h5>
                          </div>

                          <div className="col">
                            <h5 className="card-title d-flex justify-content-end">
                              ${product.price}
                            </h5>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p className="card-text">
                              <b>Brand : </b>
                              {product.brand}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <p className="card-text text-success">
                              Discount Offer : {product.discountPercentage}%
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p className="card-text">{product.description}</p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <p className="card-text text-danger">
                              In Stock : {product.stock}
                            </p>
                          </div>
                          <div className="col d-flex justify-content-end"></div>
                        </div>

                        <div className="row">
                          <div className="col d-flex align-items-center">
                            <h5 className="review-star">
                              Rating : {product.rating}
                            </h5>
                          </div>
                          <div className="col d-flex align-items-center justify-content-end">
                            <div>
                              <button
                                className="btn btn-danger"
                                onClick={() =>
                                  handleDecrement(finalPrice, quantity)
                                }
                              >
                                -
                              </button>
                              <span> {quantity} </span>
                              <button
                                className="btn btn-success"
                                onClick={() =>
                                  handleIncrement(i, finalPrice, quantity)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col small-ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="col"></div>
                        </div>

                        <div className="row">
                          <div className="col card-text d-flex align-items-center">
                            <small className="text-muted d-flex align-items-center">
                              Last updated 3 mins ago
                            </small>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-0 p-4 subtotal">
                    <div className="col">
                      <div className="row">
                        <div className="col card-title">
                          Original Price (1 item):
                        </div>
                        <div className="col card-title text-end">${price}</div>
                      </div>

                      <div className="row">
                        <div className="col card-title text-success">
                          Discount Amount :
                        </div>
                        <div className="col card-title text-end text-success">
                          ${Math.round(discountAmount)}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col card-title">
                          Final Price (Price - Discount) :
                        </div>
                        <div className="col card-title text-end">
                          ${finalPrice}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col card-title d-flex align-items-center">
                          Sub-Total Amount (Final price * Quantity) :
                        </div>
                        <div className="col card-title text-end fs-4">
                          ${subTotal}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
