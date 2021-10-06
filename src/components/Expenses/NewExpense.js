import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props)
{
    const[isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            
            ...enteredExpenseData,
            id:Math.random().toString()
            
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startIsEditing=()=>{
        setIsEditing(true);
    };
    const stopIsEditing=()=>{
        setIsEditing(false);
    }
    return(
        <div className="new-expense">
            {isEditing===false ?
            (<button onClick={startIsEditing}>Add new expense</button>):

            (<ExpenseForm cancelEditing={stopIsEditing} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>)
            }
        </div>
    );
}
export default NewExpense;