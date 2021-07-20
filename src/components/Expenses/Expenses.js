import { useState } from 'react';

import './Expenses.css';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState('2020');

  const filteredExpenses = props.expenses.filter(item => parseInt(item.date.getFullYear()) === parseInt(filterdYear));

  const filterChangeHandler = (selectYear) => {
    // setFilteredYear(selectYear);
    setFilteredYear(() => {
      return selectYear;
    })
  }


  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;