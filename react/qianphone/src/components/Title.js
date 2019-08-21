import React, { Component } from 'react';
import '../css/Title.css'
import '../Iconfont/iconfont.css'
class Title extends Component {
    constructor(porps) {
        super(porps)
    }
    static defaultProps = {
        link: '学员后台',
        show: false,
        content:'',
        style:{
            'color':'black'
        }
    }
    next() {
        console.log(this);
    }
    render() {
        return (
            <div>
                <div className="breadcrumbs" id="breadcrumbs">
                    <ul className="breadcrumb">
                        <li className="active_test"><a href="/">{this.props.link}</a></li><li className="active_test"> <i className="iconfont icon-youjiantou"></i> {this.props.title}</li>
                    </ul>
                </div>
                <div className="page-header"  style={this.props.style}>
                    {this.props.content}
                    <span style={{
                        'display': this.props.show ? 'inline-block' : 'none'
                    }} onClick={this.next.bind(this)}>修改</span>
                </div>
            </div>

        );
    }
}

export default Title;