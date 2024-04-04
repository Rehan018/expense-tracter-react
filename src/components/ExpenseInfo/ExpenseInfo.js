import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const grandTotal = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
// Calculate income (sum of positive amounts)
const income = expenses
.filter((expense) => expense.amount > 0)
.reduce((total, expense) => total + expense.amount, 0);

// Calculate expense (sum of negative amounts)
const expenseAmount = expenses
.filter((expense) => expense.amount < 0)
.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(expenseAmount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
