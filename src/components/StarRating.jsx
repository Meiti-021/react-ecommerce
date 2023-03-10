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
    const result = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      result.push("full");
    }
    let rest = 5 - rate;
    if (rest - Math.floor(rest) > 0) {
      result.push("half");
      rest = rest - 1;
    }
    for (let j = 0; j < rest; j++) {
      result.push("empty");
    }
    setStar(result);
  }, [rate]);
  return (
    <div className="star-rating">
      {star.map((item) => {
        if (item === "full") {
          return <IoStarSharp key={`${Math.random() * 100000000000000}`} />;
        } else if (item === "half") {
          return (
            <IoStarHalfOutline key={`${Math.random() * 100000000000000}`} />
          );
        } else if (item === "empty") {
          return <IoStarOutline key={`${Math.random() * 100000000000000}`} />;
        }
      })}
    </div>
  );
};

export default StarRating;
