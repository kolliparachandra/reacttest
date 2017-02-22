import {v4} from 'uuid';
import {getIsFetching} from './reducers'
import * as api from './fakeDatabase'

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

export const fetchTodos=(filter)=>(dispatch,getState)=>{
    if(getIsFetching(getState(),filter)){
        return Promise.resolve();
    }
    dispatch({type:'FETCH_TODOS_REQUEST',
            filter
             })
    return api.fetchTodos(filter).then(response=>
           dispatch( {type:'FETCH_TODOS_SUCCESS',
                    filter,
                    response
                })
                ,
                error=>{
                    dispatch({
                        type:'FETCH_TODOS_ERROR',
                        filter,
                        message:error.message||'Something went wrong'
                    })
                }
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