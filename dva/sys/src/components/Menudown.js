import React, { Component } from 'react';
import { Menu, Icon, Switch } from 'antd';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";
const { SubMenu } = Menu;

class Menudown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [[{
                key: '1',
                title: '商品列表',
                path: '/goodlist'
            },
            {
                key: '2',
                title: '商品分类',
                path: '/goodtype'
            }, {
                key: '3',
                title: '添加商品',
                path: '/addlist'
            }]
                , [{
                    key: '4',
                    title: '用户列表',
                    path: '/userlist'
                },
                {
                    key: '5',
                    title: '添加用户',
                    path: '/adduser'
                }],
            [{
                key: '6',
                title: '订单列表',
                path: '/orderlist'
            }]
            ]
        }
    }
    handleClick(e) {
        console.log('click', e);
    }

    rfor(arr) {
        return arr.map((item) =>
            (<Menu.Item key={item.key}  > <Link to={item.path}> {item.title}</Link></Menu.Item>))
    }

    render() {
        return (
            <div style={{
                "maxHeight": '100%',
            }}>
                <Menu
                    onClick={this.handleClick}
                    style={{
                        width: 256,
                        background: '#20222A',
                        color: '#fff'
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <span>商品管理</span>
                            </span>
                        }
                    >
                        {this.rfor(this.state.data[0])}

                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <span>用户管理</span>
                            </span>
                        }
                    >
                        {this.rfor(this.state.data[1])}
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <span>订单管理</span>
                            </span>
                        }
                    >
                        {this.rfor(this.state.data[2])}
                    </SubMenu>

                </Menu>

            </div>
        );
    }
}

export default Menudown;