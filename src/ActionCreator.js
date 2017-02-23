import 'babel-polyfill'
import {normalize} from 'normalizr'
import {getIsFetching} from './reducers'
import * as api from './fakeDatabase'
import * as schema from './schema'
export const addTodo=(text)=>(dispatch)=>
    api.addTodo(text).then(response=>{
       dispatch({
        type:'ADD_TODO_SUCCESS',
        response:normalize(response,schema.todo)
})
    });

export const toggleTodo=(id)=>(dispatch)=>
  api.toggleTodo(id).then(response=>{
      
    dispatch({
        type:'TOGGLE_TODO_SUCCESS',
        response:normalize(response,schema.todo)
    })
    })

export const fetchTodos=(filter)=>(dispatch,getState)=>{
    if(getIsFetching(getState(),filter)){
        return Promise.resolve();
    }
    dispatch({type:'FETCH_TODOS_REQUEST',
            filter
             })
    return api.fetchTodos(filter).then(response=>{
           dispatch( {type:'FETCH_TODOS_SUCCESS',
                    filter,
                    response:normalize(response,schema.arrayOfTodos)
                })
    }
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