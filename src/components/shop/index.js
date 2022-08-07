import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { double } from "../../features/click/clickSlice";
import { decreaseByAmount } from "../../features/currency/currencySlice";

const ShopEl = (props) => {
  const [ClickUpgradeCost, setClickUpgradeCost] = useState(15);
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.value);

  const checkForMoney = (cost) => cost <= currency;

  const buyClickUpgrade = () => {
    if (checkForMoney(ClickUpgradeCost)) {
      dispatch(double());
      setClickUpgradeCost(ClickUpgradeCost * 7);
      dispatch(decreaseByAmount(ClickUpgradeCost));
    }
  };

  return (
    <div>
      <h1 onClick={() => buyClickUpgrade()}>click for double click</h1>
    </div>
  );
};

export default ShopEl;
