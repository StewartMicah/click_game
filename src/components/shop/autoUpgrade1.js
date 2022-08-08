import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseByAmount } from "../../features/currency/currencySlice";
import {
  multiplyAmount,
  addAmount,
} from "../../features/interval/intervalSlice";

const AutoUpgrade1 = () => {
  const [amount, setAmount] = useState(0);
  const [upgradedValue, setUpgradedValue] = useState(0.05);
  const [moreCost, setMoreCost] = useState(10);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const currency = useSelector((state) => state.currency.value);

  const dispatch = useDispatch();

  const checkForMoney = (cost) => cost <= currency;

  const buyMore = () => {
    if (checkForMoney(moreCost)) {
      setMoreCost(moreCost * 1.2);
      dispatch(addAmount(upgradedValue));
      dispatch(decreaseByAmount(moreCost));
      setAmount(amount + 1);
    }
  };

  const buyUpgrade = () => {
    if (checkForMoney(upgradeCost)) {
      setUpgradedValue(upgradedValue + upgradedValue);
      setUpgradeCost(upgradeCost * 5);
      dispatch(multiplyAmount(2));
      dispatch(decreaseByAmount(upgradeCost));
    }
  };

  return (
    <div>
      <h1 onClick={() => buyMore()}>
        buy More: {moreCost.toFixed(2)}
        <div>currently owned: {amount}</div>
      </h1>
      <h1 onClick={() => buyUpgrade()}>
        buy Upgrade: {upgradeCost.toFixed(2)}
      </h1>
    </div>
  );
};

export default AutoUpgrade1;
