/* eslint-disable no-unused-vars */
import React ,{ useContext } from 'react'
import PropTypes from "prop-types";
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
const { deleteTransaction } = useContext(GlobalContext)
const sign = transaction.amount > 0 ? '+' : '-';
  return (
    <li className = {transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount) }</span>
      <button onClick = {() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
