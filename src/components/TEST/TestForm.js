import React,{useState} from "react"

const TestForm =(props)=>{

    const [enteredName ,setEnteredName] = useState('')
    const [enteredAge ,setEnteredAge] = useState('')

    const nameHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const ageHandler=(event)=>{
        setEnteredAge(event.target.value)
    }

    const saveData=(event)=>{
        event.preventDefault()
        const formData ={
            name: enteredName,
            age : enteredAge
        }
        props.onFormSubmission(formData)
        //console.log(formData)
        setEnteredName('')
        setEnteredAge('')
 
    }
    return(
        <div>
            <form onSubmit={saveData}>
                <div>
                    <label>Name</label>
                    <input type='text' value={enteredName} onChange={nameHandler}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' value={enteredAge} min='18' max='100' step='1' onChange={ageHandler}/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default TestForm