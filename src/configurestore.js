import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import todos from './reducers'
//import {fetchTodos} from './fakeDatabase'
//fetchTodos('all').then((todos=>todos)).then(todos =>todos.map(todo =>console.log(todo) ));
const configureStore=()=>{
const middlewares=[promise];
if(process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

const store= createStore(todos,
applyMiddleware(...middlewares));

return store;
}

export default configureStore;