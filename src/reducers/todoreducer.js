const todo=(state,action)=>{
switch(action.type){
    case 'ADD_TODO':
    return{
        id:action.id,
        text:action.text,
        completed:false
    }
    case 'TOGGLE_TODO':
    if(action.id !== state.id)
        return state;
    return {
        ...state,
        completed:!state.completed
        
    }   
    default:
        return state;
 }
}

const todos=(state=[],action)=>{
switch(action.type){
    case 'ADD_TODO':
    return [...state,
            todo(undefined,action)];
    case 'TOGGLE_TODO':
    return state.map(t=>
            todo(t,action));
default:
    return state;
}
}


export default todos;

export const getVisibleTodos=(todos,filter)=>{
    switch(filter){
        case 'all':
        return todos;
        case 'completed':
        return todos.filter(t => t.completed === true);
        case 'active':
        return todos.filter(t=>t.completed === false);
        default:
        throw Error(`Filter is invalid ${filter}`)
    }
}

