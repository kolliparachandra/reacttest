import {  extendObservable } from 'mobx';
import mobx from 'mobx'
class TodoStore{
   
    constructor(){
         extendObservable(this,{
        todos:[],
        completedTodosCount:()=>this.todos.filter((todo)=> todo.completed === true).length,
        report :()=>{
            if(this.todos.length === 0) return '<none>';
            return `Next todo: '${this.todos[0].task}' Progress:${this.completedTodosCount()}/${(this.todos.length)}`
        },
        addTodo(task){
        this.todos.push({
            task:task,
            completed:false,
            assignee:null
        })
    }
      });
    
      mobx.autorun(()=>console.log(this.report()))
    }
     
    
    
    
    
}

export default TodoStore;