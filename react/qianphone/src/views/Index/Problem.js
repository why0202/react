import React, { Component } from 'react';

import Title from '../../components/Title'
import PForm from '../../components/P-From'
import '../../css/P-Table.css'


class Problem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                key: '1',
                name: 'John Brown',
                qes: 32,
                time: '0571-22098909',
                res: 18889898989,
            },
            ]
        }
    }
    render() {
        return (
            <div >
                <Title title="技术问题"></Title>
                <PForm></PForm>
              
            </div>
        );
    }
   
}

export default Problem;