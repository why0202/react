import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Header from '../components/Header';
import Main from '../components/Main';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: false
        }
    }
    async componentDidMount() {
        let token = JSON.parse(localStorage.getItem('stuinfo')).token
        console.log(token);
        let islogin = await this.$axios({
            method:'post',
            url:'http://localhost:3200/login/check',
            data:this.$qs.stringify({
                token
            })
        })
        // console.log(islogin);

    }
    render() {
        return (

            <div style={{
                width: '100%',
                height: '100%'
            }}>
                <Header />
                <Main ></Main>
            </div>

        );
    }
}

export default Index;