import {v4} from 'uuid';
import {getIsFetching} from './reducers'
import * as api from './fakeDatabase'
const requestTodos=(filter)=>()

export const addTodo=(text)=>(
    {
        type:'ADD_TODO',
        id:v4(),
        text
        
    }
)




export const toggleTodo=(id)=>(
    {
        type:'TOGGLE_TODO',
        id
    }
)

export const receiveTodos=(filter,response)=>(
    {type:'RECEIVE_TODOS',
    filter,
    response
    }
)
export const fetchTodos=(filter)=>(dispatch,getState)=>{
    if(getIsFetching(getState(),filter)){
        return Promise.resolve();
    }

    dispatch(requestTodos(filter))
    
    return api.fetchTodos(filter).then(response=>
           dispatch(receiveTodos(filter,response))
           );
}

// export function fetchTodos(filter){
//     return function(dispatch){
//         dispatch(requestTodos(filter))
//         return api.fetchTodos(filter).then(response=>
//            dispatch(receiveTodos(filter,response))
//            );
// }
// }