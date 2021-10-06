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
    console.log(props.items);
    return(
      <div>
        
      
        <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={onChangeFilterHandler}></ExpensesFilter>
        
        {
          
        props.items.map((expense)=>(
          
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
          
        ))
        
        };
          
     </Card>
     </div>
    );
}
export default Expenses;