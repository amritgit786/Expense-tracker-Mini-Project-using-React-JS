import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((trans) => {
          return <Transaction key={trans.id} trans={trans} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
