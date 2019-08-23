import React, { Component } from 'react';
import { PageHeader, Button, Icon, Input, Menu, Dropdown, message, Table } from 'antd';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import '../css/Goodlist.css';
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
        breadcrumbName: '商品列表',
    },
];
//在线图标
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1362080_5s62jxh1z89.js', // 在 iconfont.cn 上生成
});

// 编辑单条
const edit = function (text, record) {
    this.props.history.push(`/detail/${text.id}`)
}
//删除单行
const delone = function (text, record) {
    this.$axios({
        method: 'post',
        url: 'http://localhost:22222/goodlist/del',
        data: this.$qs.stringify({
            id: text.id
        })
    })
    this.setState({
        data: this.state.data.filter(i => i.id != text.id)
    })
    message.info('删除成功');
}

class Goodlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    title: '#',
                    dataIndex: 'id',
                }, {
                    title: '商品名称',
                    dataIndex: 'title',
                },
                {
                    title: '分类',
                    dataIndex: 'type',
                },
                {
                    title: '价格(原价)',
                    dataIndex: 'oldprice',
                }, {
                    title: '价格(现价)',
                    dataIndex: 'price',
                }, {
                    title: '库存',
                    dataIndex: 'kucun',
                }, {
                    title: '添加时间',
                    dataIndex: 'addtime',
                }, {
                    title: '操作',
                    dataIndex: 'action',
                    render: (text, record) => (
                        <div><Button size="small" onClick={edit.bind(this, record)}>
                            <MyIcon type="icon-bianji" />
                        </Button>
                            <Button size="small" onClick={delone.bind(this, record)}>
                                <MyIcon type="icon-shanchu" />
                            </Button>
                        </div>)
                }],
            // 所有数据
            data: [],
            // 选择的id
            selectdata: [],
            key: '',
            type: '请选择分类',
            //下拉菜单
            menu: (
                <Menu onClick={this.handleMenuClick.bind(this)}>
                    <Menu.Item key="1">
                        电脑
                  </Menu.Item>
                    <Menu.Item key="2">
                        手机
                  </Menu.Item>
                    <Menu.Item key="3">
                        配件
                  </Menu.Item>
                </Menu>
            )
        }
    }
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            let arr = [];
            selectedRows.map((item) => {
                arr.push(item)
            })
            // console.log(arr);
            this.setState({
                selectdata: arr
            })
        },
    }
    // 分类查找
    handleMenuClick(e) {
        this.setState({
            type: e.item.props.children
        })
        this.$axios({
            method: 'post',
            url: 'http://localhost:22222/goodlist/searchtype',
            data: this.$qs.stringify({
                key: e.item.props.children
            })
        }).then((res) => {
            res.data.map((item, index) => {
                item.key = index
            })
            this.setState({
                data: res.data
            })
        })
    }
    // 查询
    search() {
        // console.log(this.state.key)
        this.$axios({
            method: 'post',
            url: 'http://localhost:22222/goodlist/search',
            data: this.$qs.stringify({
                key: this.state.key
            })
        }).then((res) => {
            res.data.map((item, index) => {
                item.key = index
            })
            this.setState({
                data: res.data
            })
        })
    }
    // 输入
    changekey(e) {
        // console.log(e.target.value)
        this.setState({
            key: e.target.value
        })
    }
    // 点击添加
    add(){
        this.props.history.push("/addgood")
    }
    // 删除多条
    del() {
        this.state.selectdata.map((item) => {
            this.$axios({
                method: 'post',
                url: 'http://localhost:22222/goodlist/del',
                data: this.$qs.stringify({
                    id: item.id
                })
            }).then((res) => {

            })
        })
        let arr = this.state.data;
        for (var i = 0; i < this.state.selectdata.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === this.state.selectdata[i]) {
                    arr.splice(j, 1);
                    j--;
                }
            }
            this.setState({
                data: arr
            })
        }
        message.info('删除成功');

    }
    componentDidMount() {
        this.$axios({
            method: 'get',
            url: 'http://localhost:22222/goodlist/get',
        }).then((res) => {
            res.data.map((item, index) => {
                item.key = index
            })
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        return (
            <Router>
                <div className="clearfix">
                    <div className="fl" style={{ 'borderBottom': "1px solid #ccc", 'width': '100%' }}>
                        <PageHeader breadcrumb={{ routes }} />
                    </div>
                    <div style={{ "height": "53px" }}></div>
                    <div className="goodlist_con">
                        <div className="goodlist_button">
                            <Button type="primary" icon="plus-circle" size="large" onClick={this.add.bind(this)}
                                style={{ "background": "#5cbcb1", "borderColor": '#5cbcb1', "marginRight": '20px' }}>添加
                            </Button>
                            <Button size="large" style={{ "marginRight": "222px" }} onClick={this.del.bind(this)}>
                                <MyIcon type="icon-xiazai14" /> 删除
                            </Button >
                            <Input placeholder="请输入标题"
                                style={{ 'width': "28%", "height": '38px', "marginRight": '40px' }}
                                value={this.state.key} onChange={this.changekey.bind(this)} onPressEnter={this.search.bind(this)} />
                            <Dropdown overlay={this.state.menu} trigger={["click"]} >
                                <Button>
                                    {this.state.type}<Icon type="down" />
                                </Button>
                            </Dropdown>
                            <Button type="primary" size="large"
                                style={{ "background": "#5cbcb1", "borderColor": '#5cbcb1', "float": 'right' }} onClick={this.search.bind(this)} >
                                搜索
                        </Button>
                        </div>
                        <div className="goodlist_table" style={{ 'paddingTop': '20px' }}>
                            <Table rowSelection={this.rowSelection} columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>
                </div></Router>
        );
    }
}

export default withRouter(Goodlist);