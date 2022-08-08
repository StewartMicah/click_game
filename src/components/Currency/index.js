import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from "../../features/currency/currencySlice";

const CurrencyEl = () => {
    const click = useSelector(state => state.click.value)
    const currency = useSelector(state => state.currency.value)
    const dispatch = useDispatch()
  return (
    <div>
      <div>{currency.toFixed(2)}</div>
    </div>
  );
};

export default CurrencyEl;
