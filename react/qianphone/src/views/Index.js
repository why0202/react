import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class Index extends Component {
    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%'
            }}>
                <Header  />
                <Main ></Main>
            </div>
        );
    }
}

export default Index;