import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart=(props)=>{
    const refArray =[
        {id:1 , month:'Jan',amount:0},
        {id:2 , month:'Feb',amount:0},
        {id:3 , month:'Mar',amount:0},
        {id:4 , month:'Apr',amount:0},
        {id:5 , month:'May',amount:0},
        {id:6 , month:'Jun',amount:0},
        {id:7 , month:'Jul',amount:0},
        {id:8 , month:'Aug',amount:0},
        {id:9 , month:'Sep',amount:0},
        {id:10 , month:'Oct',amount:0},
        {id:11 , month:'Nov',amount:0},
        {id:12 , month:'Dec',amount:0},
    ];

    for (const expense of props.item) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        refArray[expenseMonth].amount += expense.amount;
      }


    return(<div>
        <Chart filteredChart={refArray}/>
    </div>)
}
export default ExpenseChart;