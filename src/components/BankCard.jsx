import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import CreditCard from "./CreditCard";
import { useSelector } from "react-redux";

const BankCard = () => {
  const { userBankCards } = useSelector((state) => state.user);
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {userBankCards.map((card) => {
          return (
            <SwiperSlide>
              <CreditCard {...card} key={card.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BankCard;
