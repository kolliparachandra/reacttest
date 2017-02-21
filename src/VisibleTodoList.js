import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getVisibleTodos} from './reducers/reducer'
import * as actions from './ActionCreator'
import TodoList from './TodoComponent'
import {withRouter} from 'react-router'


class VisibleTodoList extends Component{
    componentWillMount(){
      this.fetchData();
    }
    render(){
        const {toggleTodo,...rest} = this.props;
     return(
         
        <TodoList 
            {...rest} 
            onTodoClick={toggleTodo} />
     )
    }

    componentDidUpdate(prevProps){
        if(prevProps.filter !== this.props.filter){
           this.fetchData();
        }
    }

    fetchData(){
         this.props.fetchTodos(this.props.filter);
    }
}


const mapStatetoProps=(state,{params})=>{
    const filter = params.filter||'all';
    return{    
    todos:getVisibleTodos(state,filter),
    filter
}}

VisibleTodoList=withRouter(connect(
mapStatetoProps,
actions
)(VisibleTodoList));

export default VisibleTodoList;