import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Transaction from "./components/Transaction/Transaction";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  const addExpense = (text, amount) => {
    const newExpense = {
      id: new Date().getTime(),
      text,
      amount: +amount
    };
    setExpenses([...expenses, newExpense]);
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Calculate balance, income, and expense
  const balance = expenses.reduce((total, expense) => total + expense.amount, 0);
  const income = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((total, expense) => total + expense.amount, 0);
  const expenseAmount = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((total, expense) => total + expense.amount, 0);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} /> {/* Pass onDeleteExpense */}
        </div>
      </div>
    </>
  );
}

export default App;
