import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getDeposits } from "./reducer";

function SubTotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal({cart?.length}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getDeposits(cart)}
        displayType={"text"}
        thousandSepartor={true}
        prefix={"Shs"}
      />

      <button>Proceed to Dippo Checkout</button>
    </div>
  );
}

export default SubTotal;
