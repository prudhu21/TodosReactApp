import { Component, useState  } from "react"
import { FaPlus } from "react-icons/fa"


function Form({addTodo}) {
    const [value,setValue]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value.trim()) return;
        addTodo(value);
        setValue('');
        console.log(value)
    }; 
    
    return(
        <div>
            <h1>Todo Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter What you want to do" value={value} 
                    onChange={(e)=>setValue(e.target.value)}/>
                <button> <FaPlus/> Add</button>
            </form>
        </div>
        )
};
export default Form