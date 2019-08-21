import React, { Component } from 'react';
import Title from '../../components/Title'
import '../../css/index.css'
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{
                'padding': '8px 20px 24px'
            }}>
                <Title link='系统管理' title="后台首页" show='{true}'></Title>
                <div className="clearfix">
                    <div className="fl img">
                        <span>
                            <img></img>
                        </span>
                        <div className="img-name">
                            <div className="inline position-relative">
                                <a href="#" className="user-title-label dropdown-toggle" >
                                    <i className="icon"></i>
                                    &nbsp;
						            <span className="white">武红艳 &nbsp;&nbsp; (女) </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='fr info'>
                        <table>
                            <tbody>
                                <tr >
                                    <td >身份证</td>
                                    <td>******************</td>
                                </tr>
                                <tr >
                                    <td >手机号</td>
                                    <td>******************</td>
                                </tr>
                                <tr >
                                    <td >QQ</td>
                                    <td>******************</td>
                                </tr>
                                <tr >
                                    <td >学号</td>
                                    <td>GZ190313020</td>
                                </tr>
                                <tr >
                                    <td >毕业学院</td>
                                    <td>吉首大学    计算机科学与技术</td>
                                </tr>
                                <tr >
                                    <td >在校状态</td>
                                    <td>大四</td>
                                </tr>
                                <tr >
                                    <td >学历</td>
                                    <td>本科</td>
                                </tr>
                                <tr >
                                    <td >千锋班级</td>
                                    <td>广州HTML5就业班1905期</td>
                                </tr>
                                <tr >
                                    <td >招生老师</td>
                                    <td>纪景</td>
                                </tr>
                                <tr >
                                    <td >报名日期</td>
                                    <td>2019-01-21</td>
                                </tr>
                                <tr >
                                    <td >介绍人</td>
                                    <td>无</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="index-bottom">
                    <div className="form-group">
                        <div className="table-responsive" >
                            <div className="inline"> <h5>[ <b>我的消息</b> ]</h5> </div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr >
                                        <th style={{
                                            'width': '90%'
                                        }}>消息内容</th>
                                        <th style={{
                                            'width': '10%'
                                        }}>时间</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="table-responsive" >
                            <div className="inline"> <h5>[ <b>班主任寄语</b> ]</h5> </div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th style={{
                                            'width': '15%'
                                        }}>评价老师</th>
                                        <th style={{
                                            'width': '70%'
                                        }}>寄语内容</th>
                                        <th style={{
                                            'width': '15%'
                                        }}>时间</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="table-responsive" >
                            <div className="inline"> <h5>[ <b>千锋其他会员开通</b> ]</h5> </div>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th style={{
                                            'width': '10%'
                                        }} >产品描述</th>
                                        <th style={{
                                            'width': '45%'
                                        }} >产品介绍</th>
                                        <th style={{
                                            'width': '45%'
                                        }}>开通信息</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;