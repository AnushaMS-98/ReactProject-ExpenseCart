import "./ExpenseItem.css";
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
import React,{useState} from 'react'

function ExpenseItem(props){

   // const [title,setState] = useState(props.title)
    
    // const ClickHandler = () =>{
    //     setState("Changed")
    //     console.log("wqwrwet")
    // }

    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}>hello</ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount} </div>            
            </div>
            {/* <button onClick={ClickHandler}>Click Me</button> */}
        </div>
    );
}
export default ExpenseItem