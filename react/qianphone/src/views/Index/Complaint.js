import React, { Component } from 'react';
import '../../css/Complaint.css'
import Title from '../../components/Title'
import CForm from '../../components/C-from'
class Complaint extends Component {
    render() {
        return (
            <div >
                <Title title="匿名投诉"></Title>
                <div className='content' style={{
                'padding': '8px 20px 24px'
            }}>
                    <div><CForm></CForm></div>
                </div>
            </div>
        )
    }
}

export default Complaint;