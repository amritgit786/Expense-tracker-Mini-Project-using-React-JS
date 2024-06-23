import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <li className={trans.amount < 0 ? "minus" : "plus"}>
        {trans.text}{" "}
        <span>
          {sign}${Math.abs(trans.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(trans.id)}
        >
          X
        </button>
      </li>
    </>
  );
};

export default Transaction;
