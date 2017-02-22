import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
//import promise from 'redux-promise'
import todos from './reducers'

// const thunk=(store)=>(next)=>(action)=>
//         typeof action === 'function'?
//         action(store.dispatch,store.getState):
//         next(action);
//import {fetchTodos} from './fakeDatabase'
//fetchTodos('all').then((todos=>todos)).then(todos =>todos.map(todo =>console.log(todo) ));
const configureStore=()=>{
const middlewares=[thunk];
if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

const store= createStore(todos,
applyMiddleware(...middlewares));

return store;
}

export default configureStore;