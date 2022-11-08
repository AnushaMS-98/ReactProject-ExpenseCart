// import React,{useState} from "react"
// import TestForm from "./TestForm"

// const TestParent=()=>{
//     const dataHanldler=personalData=>{
//         console.log(personalData)
//     }
//     return(
//         <div>
//             <TestForm onEntered={dataHanldler}/>
//         </div>
        
//     )
// }
// export default TestParent;


import TestForm from "./TestForm";
import React from "react";

const TestParent = () =>{

    const getFormData = (enteredData) =>{
        console.log(enteredData);         
        }

    return(
        <div>
            <TestForm onFormSubmission = {getFormData}/>
        </div>
    )
}
export default TestParent;