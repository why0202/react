import React from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import App from './App';
import axios from 'axios'
import qs from 'qs'
import * as serviceWorker from './serviceWorker';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
React.Component.prototype.$axios = axios;
React.Component.prototype.$qs = qs;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
