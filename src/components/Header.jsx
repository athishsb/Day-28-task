import { useContext } from "react";
import { ProductContext } from "../ContextProvider";

export default function Header() {
  const { totalAmount, totalQuantity } = useContext(ProductContext);

  return (
    <>
      <header>
        <div className="row bg-light d-flex justify-content-between align-items-center py-3">
          <div className="col">Total QTY: {totalQuantity}</div>
          <div className="col">
            Total Price: {parseFloat(totalAmount).toFixed(2)}
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Proceed to pay</button>
          </div>
        </div>
      </header>
    </>
  );
}
