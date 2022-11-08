import ExpenseList from "./ExpenseList";
//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
//import Card from "../UI/Card"
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import React,{useState} from 'react';
import ExpenseChart from "./ExpenseChart";

function Expenses(props){

    const [exFilterDate, setExFilterDate] = useState('2020')
   
    const myArray = props.item
    //console.log(myArray[0].date.getFullYear())
    const selectDate = year => {
        setExFilterDate(year)
        //console.log(year);
    }
    //console.log(1,exFilterDate)
    const filteredArray = props.item.filter( each => (each.date.getFullYear()) == exFilterDate)


    return(
        <div>
            <ExpenseFilter selected ={exFilterDate} onFilter ={selectDate}/>
            <ExpenseChart item={filteredArray}/>
            <div className="expenses">
                <ExpenseList item = {filteredArray}/>
                {/* <ExpenseItem title={myArray[1].title} amount={myArray[1].amount} date={myArray[1].date}></ExpenseItem>
                <ExpenseItem title={myArray[2].title} amount={myArray[2].amount} date={myArray[2].date}></ExpenseItem>
                <ExpenseItem title={myArray[3].title} amount={myArray[3].amount} date={myArray[3].date}></ExpenseItem> */}
            </div>
        </div>
        
    )
    
}
export default Expenses