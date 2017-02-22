import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getVisibleTodos,getIsFetching} from './index'
import * as actions from './ActionCreator'
import TodoList from './TodoComponent'
import {withRouter} from 'react-router'


class VisibleTodoList extends Component{
    componentWillMount(){
      this.fetchData();
    }
    render(){
        const {toggleTodo,todos,isFetching} = this.props;
        if(isFetching && !todos.length)
            return <p>Loading...</p>
     return(
         
        <TodoList 
           todos={todos} 
            onTodoClick={toggleTodo} />
     )
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter){
           this.fetchData();
        }
    }

    fetchData(){
        const {filter,requestTodos,fetchTodos}=this.props;
         requestTodos(filter);
         fetchTodos(filter);         
    }
}


const mapStatetoProps=(state,{params})=>{
    const filter = params.filter||'all';
    return{    
    todos:getVisibleTodos(state,filter),
    isFetching:getIsFetching(state,filter),
    filter
}}

VisibleTodoList=withRouter(connect(
mapStatetoProps,
actions
)(VisibleTodoList));

export default VisibleTodoList;