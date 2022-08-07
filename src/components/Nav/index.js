import React from "react";
import ClickEl from "../Click";

import CurrencyEl from "../Currency";
import Interval from "../setInterval";
import ShopEl from "../shop";

function Nav() {
  return (
      <div>
        <ShopEl />
        <ClickEl/>
        <CurrencyEl/>
        <Interval/>
      </div>
  );
}

export default Nav;
