import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = props =>{
    let contents = <p>No Objects Found</p>
    if (props.item.length == 0){
        return (<div className="expenses-list__fallback">
            {contents}
        </div>)
    }
    return(
        <ul className="expenses-list">
            {props.item.map(each => <ExpenseItem key={each.id} 
            title={each.title} 
            amount={each.amount} 
            date={each.date}
            />)}
        </ul>
    )
    
}

export default ExpenseList;