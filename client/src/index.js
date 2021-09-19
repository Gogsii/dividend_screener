import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //keeps track of the store aka the global state, allows us to access the state from anywhere inside the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';
import './index.css';

//to set redux we first have to create store
const store = createStore( reducers, compose( applyMiddleware(thunk) ));

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

//import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
