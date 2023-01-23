import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  IoStarSharp,
  IoStarOutline,
  IoStarHalfOutline,
} from "../database/icons";
const StarRating = ({ rate }) => {
  const [star, setStar] = useState([]);
  useEffect(() => {
    const fakeNumber = rate;
    const newArray = [];
    let total = 5;
    for (let i = 0; i < Math.floor(fakeNumber); i++) {
      newArray.push("full");
      total--;
    }
    if (fakeNumber - Math.floor(fakeNumber) !== 0) {
      newArray.push("half");
    }
    if (total > 1) {
      for (let i = 0; i < total; i++) {
        total -= 1;
        newArray.push("empty");
      }
    }
    console.log(newArray);
    setStar(newArray);
  }, []);
  return (
    <div className="star-rating">
      {star.map((item) => {
        if (item === "full") {
          return <IoStarSharp />;
        } else if (item === "half") {
          return <IoStarHalfOutline />;
        } else if (item === "empty") {
          return <IoStarOutline />;
        }
      })}
    </div>
  );
};

export default StarRating;
