import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../features/currency/currencySlice";
import useInterval from "../../hooks/use-interval";
import { decreaseByAmount } from "../../features/currency/currencySlice";

const Interval = () => {
  const [incrementMonies, setIncrementMonies] = useState(0.005);
  const [intervalTime, setIntervalTime] = useState(100000000000000000000);
  const [perSec, setPerSec] = useState(0);
  const [cost, setCost] = useState(10)
  const currency = useSelector((state) => state.currency.value);

  const dispatch = useDispatch();

  useInterval(() => dispatch(incrementByAmount(incrementMonies)), intervalTime);

  const checkForMoney = () => cost <= currency;

  const buy = () => {
    if (checkForMoney()) {
      setCost(cost * 7);
      setIncrementMonies(incrementMonies + 0.005);
      dispatch(decreaseByAmount(cost));
      setIntervalTime(50)
    }
  };

  useEffect(() => {
    var intervalsPerSec = 1000 / intervalTime || 0 ;
    setPerSec(incrementMonies * intervalsPerSec);
  }, [incrementMonies, intervalTime]);


  return (
    <div>
      <h1 onClick={() => buy()}>INCREASE CASH</h1>
      <h1>{perSec.toFixed(2)}</h1>
    </div>
  );
};

export default Interval;
