# Expense Tracker

This project is a simple expense tracker application built with React. It allows users to add and remove transactions and tracks the balance, income, and expenses.

## Features

- Add new transactions with text and amount
- Delete existing transactions
- Display total balance, income, and expenses

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/expense-tracter-react.git
```

2. Navigate into the project directory:

```bash
cd expense-tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.

## How to Use

1. Enter the transaction details in the form provided on the left side of the screen.
2. Click the "Add Transaction" button to add the transaction.
3. To delete a transaction, hover over the transaction item in the list and click the delete button.

## File Structure

The project structure is as follows:

- `src/`: Contains the source code for the application.
  - `components/`: Contains React components.
    - `ExpenseForm/`: Contains the form component for adding transactions.
    - `ExpenseInfo/`: Contains the component to display balance, income, and expenses.
    - `ExpenseList/`: Contains the component to display the list of transactions.
    - `Transaction/`: Contains the individual transaction component.
  - `images/`: Contains images used in the application.
  - `App.js`: Main component file where state and main functionality are managed.
  - `App.css`: Stylesheet for the application.

## Dependencies

This project uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods.
- react-scripts: Contains scripts and configuration used by Create React App.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the Coding Ninja License. See the LICENSE file for details.
