import {connect} from 'react-redux'
import {getVisibleTodos} from './reducers/reducer'
import {toggleTodo} from './ActionCreator'
import TodoList from './TodoComponent'
import {withRouter} from 'react-router'
const mapStatetoProps=(state,ownProps)=>({
todos:getVisibleTodos(state,ownProps.params.filter)
})
const mapDispatchToProps=(dispatch)=>({
onTodoClick:(id)=>{
    dispatch(toggleTodo(id))
} 
})
const VisibleTodoList=withRouter(connect(
mapStatetoProps,
mapDispatchToProps
)(TodoList));

export default VisibleTodoList;