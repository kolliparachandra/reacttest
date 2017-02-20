import {connect} from 'react-redux'
import {getVisibleTodos} from './reducers/reducer'
import {toggleTodo} from './ActionCreator'
import TodoList from './TodoComponent'
import {withRouter} from 'react-router'
const mapStatetoProps=(state,{params})=>({
    todos:getVisibleTodos(state,params.filter||'all')
})

const VisibleTodoList=withRouter(connect(
mapStatetoProps,
{onTodoClick:toggleTodo}
)(TodoList));

export default VisibleTodoList;