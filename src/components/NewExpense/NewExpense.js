import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
//import ExpenseFormTest from "./ExpenseFormTest";

import './NewExpense.css'

const NewExpense = (props) =>{

    const[status,setStatus] =useState(false)

    const getFormData = enteredExpenseData =>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       // console.log(expenseData)
        props.onAddExpense(expenseData)

    }

    const statusHandlerTrue =currentStatus=>{
        setStatus(true);
    }

    const statusHandlerFalse =currentStatus=>{
        setStatus(false);
    }

    if (status){
        return(
            <div className="new-expense">
                <ExpenseForm onFormSubmission ={getFormData} onCancel={statusHandlerFalse}/>
            </div>
            
        )
    }
    if(!status){
        return(
        <div className="new-expense">
        <button onClick={statusHandlerTrue}>Add Expense</button>
    </div>)
    }

}
export default NewExpense;