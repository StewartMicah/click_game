import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from "../../features/currency/currencySlice";

const ClickEl = () => {
    const click = useSelector(state => state.click.value)
    const dispatch = useDispatch()
  return (
    <div>
      <h1
      onClick={() => dispatch(incrementByAmount(click))}
      >click 4 cash</h1>
    </div>
  );
};

export default ClickEl;
