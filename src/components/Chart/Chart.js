import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'


const Chart =props=>{

    const myArray = props.filteredChart;
    const dataPointValues = props.filteredChart.map(dataPoint => dataPoint.amount);
    const totalMaximum = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {myArray.map(each=>(<ChartBar key={each.id} maxAmount={totalMaximum} amount={each.amount} month={each.month}></ChartBar>))}
        </div>
    )
}
export default Chart