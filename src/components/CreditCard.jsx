import React from "react";
import { SwiperSlide } from "swiper/react";

const CreditCard = ({ id, bankName, date }) => {
  return (
    <SwiperSlide>
      <div className="credit-card">
        <p className="bank-name">{bankName}</p>
        <p className="cvv2">{date}</p>
        <h2>{id}</h2>
        <img src="./assets/main/chip.png" alt="" />
      </div>
    </SwiperSlide>
  );
};

export default CreditCard;
