import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as reducerActions from './reducers'
import * as actions from './ActionCreator'
import TodoList from './TodoComponent'
import {withRouter} from 'react-router'
import FetchError from './fetchError'

class VisibleTodoList extends Component{
    componentWillMount(){
      this.fetchData();
    }
    render(){
        const {toggleTodo,todos,isFetching,errorMessage} = this.props;
        if(isFetching && !todos.length)
            return <p>Loading...</p>

        if(errorMessage && !todos.length){
            return(
                <FetchError message={errorMessage} onRetry={()=>this.fetchData()} />
            )
        }
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
        const {filter,fetchTodos}=this.props;
         fetchTodos(filter);         
    }
}


const mapStatetoProps=(state,{params})=>{
    const filter = params.filter||'all';
    return{    
    todos:reducerActions.getVisibleTodos(state,filter),
    isFetching:reducerActions.getIsFetching(state,filter),
    errorMessage:reducerActions.getErrorMessage(state,filter),
    filter
}}

VisibleTodoList=withRouter(connect(
mapStatetoProps,
actions
)(VisibleTodoList));

export default VisibleTodoList;