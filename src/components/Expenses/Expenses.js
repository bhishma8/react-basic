import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props)
{
      const[filterYear,setFilterYear]=useState('2020')
      const onChangeFilterHandler=(selectedYear)=>{
        setFilterYear(selectedYear);
    };
      const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filterYear;
      });
    return(
      <div>
        
      
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={onChangeFilterHandler}></ExpensesFilter>
        {filteredExpenses.length === 0 ? 
        (<p>No expenses found.</p>):
        
        (filteredExpenses.map((expense)=>(
          
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />)
        ))};
      
          
     </Card>
     </div>
    );
}
export default Expenses;