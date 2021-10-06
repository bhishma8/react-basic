import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props)
{
    const[title,setTitle]=useState(props.title);
    const clickHandler=()=>{
        setTitle('Updated');
    };
    
   
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
}
export default ExpenseItem;