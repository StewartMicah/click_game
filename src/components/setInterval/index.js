import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../features/currency/currencySlice";
import useInterval from "../../hooks/use-interval";
import { decreaseByAmount } from "../../features/currency/currencySlice";
import { multiplyAmount, addAmount } from "../../features/interval/intervalSlice";

const Interval = () => {
  const [upgradedValue, setUpgradedValue] = useState(0.05)
  const [intervalTime, setIntervalTime] = useState(50);
  const [perSec, setPerSec] = useState(0);
  const [moreCost, setMoreCost] = useState(10)
  const [upgradeCost, setUpgradeCost] = useState(10)
  const incrementMonies = useSelector((state) => state.interval.value);
  const currency = useSelector((state) => state.currency.value);

  const dispatch = useDispatch();

  useInterval(() => dispatch(incrementByAmount(incrementMonies)), intervalTime);

  const checkForMoney = (cost) => cost <= currency;

  const buyMore = () => {
    if (checkForMoney(moreCost)) {
      setMoreCost(moreCost * 1.2);
      dispatch(addAmount(upgradedValue));
      dispatch(decreaseByAmount(moreCost));
      setIntervalTime(50)
    }
  };

  const buyUpgrade = () => {
    if (checkForMoney(upgradeCost)) {
      setUpgradedValue(upgradedValue + upgradedValue);
      setUpgradeCost(upgradeCost * 5);
      dispatch(multiplyAmount(2));
      dispatch(decreaseByAmount(upgradeCost));
      setIntervalTime(50);
      
    }
  };

  useEffect(() => {
    var intervalsPerSec = 1000 / intervalTime || 0 ;
    setPerSec(incrementMonies * intervalsPerSec);
  }, [incrementMonies, intervalTime]);


  return (
    <div>
      <h1>{perSec.toFixed(2)}</h1>
    </div>
  );
};

export default Interval;
