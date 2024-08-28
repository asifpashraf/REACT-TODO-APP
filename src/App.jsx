import React from "react";
import { useState } from "react";
import './App.css'
import ReactModal from "react-modal";
// import Item from "./Item";




function App (){
  const [task,setTask]=useState('')
  const [arr,setArr]=useState([])
  const [completed,setCompleted] =useState([])

  function addTask(){
    const trimmed =task.trim()
    if(trimmed !== ''){
    setArr([...arr,task])
    setTask('')}
    // console.log(arr);
  }
  const  remove=(index)=>{
      const newtodos = [...arr];
      newtodos.splice(index,1);
      setArr(newtodos);
  }
  const edit= (value)=>{
      setTask(value)
      
  }
  const changePlace =(index)=>{
    const newTodod =[...arr]
    const custom= newTodod.slice(index)
    setCompleted(custom)
    // console.log(custom);
    
    
  }
  const  removeCompleted=(index)=>{
    const newtodos = [...completed];
    newtodos.splice(index,1);
    setCompleted(newtodos);
}
  
  
  return(<>
  <div>
    
    <h1>ToDo list</h1>
    <input type="text" onChange={(input)=>setTask(input.target.value)} value={task} />
    <button onClick={addTask}>add</button>
  </div>
    <div className="taskies">
          <div>
            <h1>tasks to complete</h1>
              {arr.map((value,index)=>{
                return(<>
                <p key={index}  >
                  <button onClick={()=>{remove(index)}}>delete</button>
                  <button onClick={()=>{edit(value),remove(index)}}>edit</button>
                  {value}
                  <input type="checkbox" onChange={()=>{changePlace(index)}}/>
                </p>
                </>)
              }
              )}
               
      
           </div>
           <div>
                  <h1>completed tasks</h1>
                {completed.map((value,index)=>{
                return(<>
                <p key={index}  >
                  <button onClick={()=>{removeCompleted(index)}}>delete</button>
                  
                  {value}
                  
                </p>
                </>)
              }
              )}
                </div>
     </div>
  </>)
}
export default App