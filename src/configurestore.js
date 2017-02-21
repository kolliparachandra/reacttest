import {createStore} from 'redux';
import todoApp from './reducers/reducer'
//import {fetchTodos} from './fakeDatabase'
const logger=(store)=>(next)=>{
    if(!console.group){
        return next;
    }
    return(action)=>{
        console.group(action.type);
        console.log('%c prev state', 'color:grey',store.getState());
        console.log('%c action','color:blue',action);
        const returnValue=next(action);
        console.log('%c next state','color:green',store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const promise=(store)=>(next)=>(action)=>{
        if(typeof action.then === 'function'){
            return action.then(next)
        }
        return next(action);
    }
    
const wrapDispatchWithMiddlewares=(middlewares,store)=>{
    middlewares.slice().reverse().forEach(middleware=>
    store.dispatch=middleware(store)(store.dispatch))
}
//fetchTodos('all').then((todos=>todos)).then(todos =>todos.map(todo =>console.log(todo) ));

const configureStore=()=>{
const store= createStore(todoApp);
const middlewares=[promise];
if(process.env.NODE_ENV !== 'production')
    middlewares.push(logger)


wrapDispatchWithMiddlewares(middlewares,store)
return store;
}

export default configureStore;