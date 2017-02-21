import React from 'react';
import {render} from 'react-dom';
import configureStore from './configurestore'
import Root from './Root'
const store=configureStore();
render(<Root store={store}/>
  ,document.getElementById('root'));


