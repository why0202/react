import React from 'react';
import '../css/Main.css';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";


import { Menu, Icon, Button } from 'antd';
import Problem from '../views/Index/Problem'
import Complaint from '../views/Index/Complaint.js'
import Index from '../views/Index/Index'
import Itemupload from '../views//Index/Itemupload'

// const Complaint = () => import('../views/Complaint');
const { SubMenu } = Menu;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      list1: [{
        title: '匿名投诉',
        path: 'complaint',
        key: 1,
      }, { title: '技术问题', path: 'problem', key: 2, },
      { title: '项目上传', path: 'itemupload', key: 3, },
      { title: 'VIP', path: 'stuvip', key: 4, },
      { title: '学员周报', path: 'weekly', key: 5 },
      { title: '我的资料', path: 'index', key: 6 },
      { title: '交费明细', path: 'moneyDetail', key: 7 },
      { title: '参加考试', path: 'exam', key: 8 },
      { title: '学员评价', path: 'evaluate', key: 9 },
      { title: '教学测评', path: 'inquiry', key: 10 }],
      list2: [{
        title: '学员请假',
        path: 'leave',
        key: 11,
      }, {
        title: '学员违纪',
        path: 'discipline',
        key: 12,
      },]
    };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
 
  rfor(arr) {
    return arr.map((item) =>
      (<Menu.Item key={item.key}  > <Link to={item.path}> {item.title}</Link></Menu.Item>))
  }
  render() {
    return (
      <Router>
        <div className="main">
          <div className="m_l">
            <div >
              {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button> */}
              <Menu defaultSelectedKeys={['6']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed} >
                <SubMenu key="sub1" title={
                  <span>
                    <Icon type="mail" />
                    <span>学员后台</span>
                  </span>
                }>
                  {this.rfor(this.state.list1)}
                </SubMenu>

                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>学员考勤</span>
                    </span>
                  }>
                  {this.rfor(this.state.list2)}
                </SubMenu>
              </Menu>
            </div>
          </div>
          <div className="m_r">
            <Route path="/index/complaint" component={Complaint} />
            <Route path="/index/problem" component={Problem} />
            <Route path="/index/index" component={Index} />
            <Route path="/index/itemupload" component={Itemupload} />
          </div>
        </div>
      </Router>
    )
  }
}
export default Main