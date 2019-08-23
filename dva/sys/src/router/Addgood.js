import React, { Component } from 'react';
import { PageHeader, } from 'antd';


import WrappedRegistrationForm from "../components/Adgood"
//标题
const routes = [
    {
        path: 'index',
        breadcrumbName: '首页',
    },
    {
        path: 'first',
        breadcrumbName: '商品管理',
    },
    {
        path: 'second',
        breadcrumbName: '商品编辑',
    },
];
class Addgood extends Component {
    render() {
        return (
            <div className="clearfix">
                <div className="fl" style={{ 'borderBottom': "1px solid #ccc", 'width': '100%' }}>
                    <PageHeader breadcrumb={{ routes }} />
                </div>
                <div style={{ "height": "53px" }}></div>
                <div className="goodlist_con">
                    <WrappedRegistrationForm></WrappedRegistrationForm>
                </div>
            </div>
        );
    }
}

export default  Addgood;