import React from "react";
import { useState, useEffect } from "react";

const ShopHistory = ({ sort, historyItem, date }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    historyItem.forEach((element) => {
      totalPrice += element.amount * element.info.priceOn;
    });
    setTotal(totalPrice);
  }, []);
  return (
    <tr className="shop-history">
      <td>{sort}</td>
      <td>{total}</td>
      <td>در دست بررسی</td>
      <td>{date}</td>
    </tr>
  );
};

export default ShopHistory;
