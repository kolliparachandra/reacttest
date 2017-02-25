import React from 'react';
import {render} from 'react-dom';
//import configureStore from './configurestore'
//import Root from './Root'
import TodoList from './todocomponentmobx'
import TodoStore from './TodoMobx'

//const store=configureStore();
//render(<Root store={store}/>
  //,document.getElementById('root'));
  const observableTodoStore = new TodoStore();
  render(<TodoList store={ observableTodoStore } />,
  document.getElementById('root')
);