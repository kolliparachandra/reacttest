import {v4} from 'uuid'
const fakeDatabase={
    todos:[
            {
                id:v4(),
                completed:false,
                text:'one'
            },
            {
                id:v4(),
                completed:true,
                text:'two'
            },
            {
                id:v4(),
                completed:false,
                text:'three'
            }
    ]
};
const delay=(ms)=>new Promise(resolve=>setInterval(resolve,ms));

export const fetchTodos=(filter)=>
    delay(500).then(()=>{
        if(Math.random()>0.5)
            throw Error(`kaboom kabaam`)
    switch(filter){
        case 'all':
            return  fakeDatabase.todos;
        case 'active':
            return fakeDatabase.todos.filter(todo=>!todo.completed );
        case 'completed':
            return fakeDatabase.todos.filter(todo=>todo.completed)
        default:
            throw Error(`Invalid filter specified ${filter}`)
    }
    });

export const addTodo=(text)=>delay(500).then(()=>{
    const todo={id:v4(),completed:false,text}
    fakeDatabase.todos.push(todo);
    return todo;
}
)

export const toggleTodo=(id)=>delay(500).then(()=>{
    const todo=fakeDatabase.todos.find((todo)=>todo.id === id);
    todo.completed = !todo.completed;
    return todo;
})