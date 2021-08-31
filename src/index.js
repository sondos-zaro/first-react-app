import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, User } from './App';
// in this case we use import without {} because it will always import to whatever is the default export .
import reportWebVitals from './reportWebVitals';



ReactDOM.render( <
    React.StrictMode >

    <
    App / >
    <
    User / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();