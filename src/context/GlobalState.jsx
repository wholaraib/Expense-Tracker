/* eslint-disable no-unused-vars */
import React, { createContext, createElement, useReducer } from "react";
import PropTypes from "prop-types";
import Reducer from "./AppReducer";
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
// ? create Context
export const GlobalContext = createContext(initialState);

// ? Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // ? Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction)
  {
      dispatch({
          type : 'Add_TRANSACTION',
          payload : transaction
      })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
