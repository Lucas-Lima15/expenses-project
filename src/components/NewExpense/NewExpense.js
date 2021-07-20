import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEdidtingHandler = () => {
    setIsEditing(true);
  };

  const stopEdidtingHandler = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdidtingHandler}/>
      </div>
    );
  };

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button type="button" onClick={startEdidtingHandler}>Add New Expense</button>
      </div>
    );
  };
};

export default NewExpense;