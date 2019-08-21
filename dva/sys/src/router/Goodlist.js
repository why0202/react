import React, { Component } from 'react';
import { PageHeader, Button, Radio, Icon, Input, Menu, Dropdown, message, Table } from 'antd';
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

//下拉菜单
function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            1st menu item
      </Menu.Item>
        <Menu.Item key="2">
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            3rd item
      </Menu.Item>
    </Menu>
);

// 列表数据
const columns = [
    {    title: '#',
        dataIndex: 'id',
        //   render: text => <a>{text}</a>,
    },{
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
        render: () => (
            <div><Button size="small">
                <MyIcon type="icon-bianji" />
            </Button>
                <Button size="small">
                <MyIcon type="icon-shanchu" />
                </Button>
            </div>
        )

    },
];
const data = [
    {
        id: '1',
        title: '戴尔',
        type: "电脑",
        oldprice: 22222,
        price:2222,
        addtime:'1987-02-02',
        kucun:22,
        key:1,

    },

];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },


};

class Goodlist extends Component {
    render() {
        return (
            <div className="clearfix">
                <div className="fl" style={{ 'borderBottom': "1px solid #ccc", 'width': '100%' }}> <PageHeader breadcrumb={{ routes }} /></div>
                <div style={{ "height": "53px" }}></div>

                <div className="goodlist_con">
                    <div className="goodlist_button">
                        <Button type="primary" icon="plus-circle" size="large"
                            style={{ "background": "#5cbcb1", "borderColor": '#5cbcb1', "marginRight": '20px' }}>
                            添加
                        </Button>

                        <Button size="large" style={{ "marginRight": "222px" }}>
                            <MyIcon type="icon-xiazai14" />
                            删除
                        </Button >

                        <Input placeholder="请输入标题" style={{ 'width': "28%", "height": '38px', "marginRight": '40px' }} />

                        <Dropdown overlay={menu} trigger={["click"]} >
                            <Button>
                                请选择分类 <Icon type="down" />
                            </Button>
                        </Dropdown>

                        <Button type="primary" size="large"
                            style={{ "background": "#5cbcb1", "borderColor": '#5cbcb1', "float": 'right' }}>
                            搜索
                        </Button>
                    </div>

                    <div className="goodlist_table" style={{ 'paddingTop': '20px' }}>
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Goodlist;