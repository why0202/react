import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import qs from 'qs'
import './base.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
import Index from './views/Index'
import Login from './views/Login'
React.Component.prototype.$axios = axios;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
React.Component.prototype.$qs = qs;

ReactDOM.render(
    <Router>
        <Route path="/login"  component={Login} />
        <Route path="/index"  component={Index} />
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
