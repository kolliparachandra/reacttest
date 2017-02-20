import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from './ActionCreator'
let AddTodo=({dispatch})=>{
 let textInput;

 return(
     <div>
         <input ref={node =>textInput=node} />
         <button onClick={()=>{dispatch(addTodo(textInput.value))}}>Add Todo</button>
         </div>
 )
}

AddTodo=connect()(AddTodo);
export default AddTodo;