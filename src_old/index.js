import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { create } from 'domain';
// import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//call proviedr
import{Provider} from 'react-redux';

//call proviedr
import{createStore} from 'redux';


//call proviedr
import reducerInfo from './reducer/Reducer';

const store = createStore(reducerInfo);

ReactDOM.render(<Provider store={store}>
<App/>

</Provider>,document.getElementById('root'))


