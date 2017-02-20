import {combineReducers} from 'redux'
import {todo} from './todo'
const byId=(state={},action)=>{
switch(action.type){
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
    return {
            ...state,
            [action.id]:todo(state[action.id],action)
    }
    
    
default:
    return state;
}
}

const allIds=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
        return [...state,action.id];
        default:
        return state;
    }
}

const todos=combineReducers({
    byId,
    allIds
})

export default todos;

const getAllTodos=(state)=>
state.allIds.map(id=>state.byId[id])

export const getVisibleTodos=(state,filter)=>{
    const todoObjs= getAllTodos(state);
    switch(filter){
        case 'all':
        return todoObjs;
        case 'completed':
        return todoObjs.filter(t => t.completed === true);
        case 'active':
        return todoObjs.filter(t=>t.completed === false);
        default:
        throw Error(`Filter is invalid ${filter}`)
    }
}

