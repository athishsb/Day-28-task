import PropTypes from "prop-types";
import { createContext, useState } from "react";
import Products from "./products.json";

export const ProductContext = createContext();
export default function ContextProvider({ children }) {
  const [products, setProducts] = useState(Products);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(products.length);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        totalAmount,
        setTotalAmount,
        totalQuantity,
        setTotalQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
