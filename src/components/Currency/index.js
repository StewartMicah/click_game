import React, { useState } from "react";

const CurrencyEl = () => {
    const  [currency, setCurrency] = useState(0);
    var clickAmount = 1;


    const clickCurrency = () => {
        setCurrency(currency + clickAmount)
    }

  return (
    <div>
      <h1
      onClick={() => clickCurrency()}
      >click me</h1>
      <div>{currency}</div>
    </div>
  );
};

export default CurrencyEl;
