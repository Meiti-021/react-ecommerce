import React from "react";
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "../database/icons";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="faq">
      <p className="faq-question">
        {question}
        <button
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
        >
          {isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </p>
      {isOpen ? (
        <p className="faq-answer" style={{ borderTop: "1px solid black" }}>
          {answer}
        </p>
      ) : (
        void 0
      )}
    </article>
  );
};

export default Faq;
