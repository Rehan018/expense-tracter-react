import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from '../Transaction/Transaction.js';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Map through expenses array and render Transaction component for each expense */}
        {expenses.map((expense, index) => (
          <Transaction key={expense.id} expense={expense} index={index} onDelete={onDeleteExpense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;