import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import qs from 'qs'
import './base.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/store'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Index from './views/Index'
import Login from './views/Login'
React.Component.prototype.$axios = axios;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
React.Component.prototype.$qs = qs;

let islogin = window.localStorage.getItem('islogin');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" render={() => (
                islogin ? (
                    <Redirect to="/index/index" />
                ) : (
                        <Redirect to="/login" />
                    )
            )} />
            <Route path="/login" component={Login} />
            <Route path="/index" component={Index} />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
