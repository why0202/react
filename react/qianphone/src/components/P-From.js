import React from 'react';
import '../css/From.css'
import { Form, Input, Button, Table } from 'antd';


const { TextArea } = Input;

const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '问题理由', dataIndex: 'qes', key: 'qes' },
    { title: '创建时间', dataIndex: 'time', key: 'time' },
    {
        title: '回复',
        dataIndex: 'res',
        key: 'res',

    },
];

class FormLayoutDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
            name: "",
            qes: '',
            stuid: "",
            data: [],
        };
    }

    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    };
    //点击提问
    async tiwen() {
        let time = new Date();
        let Y = time.getFullYear();
        let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1);
        let D = (time.getDate() < 10 ? '0' + time.getDate() : time.getDate());
        let H = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        let Min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        let S = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
        let times = Y + '-' + M + '-' + D + ' ' + H + ':' + Min + ':' + S;

        await this.$axios({
            method: "post",
            url: `http://localhost:3200/problem/add`,
            data: this.$qs.stringify({
                stuid: this.state.stuid,
                name: this.state.name,
                qes: this.state.qes,
                time: times,
                ans: 0,
            })
        }).then(res => {
            this.setState({
                data: [...this.state.data, ...res.data.ops],
                qes: ''
            })
        });

    }
    //键盘事件
    send(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            this.tiwen()
        }
    }
    //输入框
    handleQes = (e) => {
        // console.log(e.target.value);
        this.setState({
            qes: e.target.value
        })
    }
    async componentDidMount() {
        let stuinfo = window.localStorage.getItem('stuinfo');
        await this.setState({
            name: JSON.parse(stuinfo).name,
            stuid:JSON.parse(stuinfo).stuid
        })

        let res = await this.$axios('http://localhost:3200/problem/find', {
            params: {
                stuid:this.state.stuid
            }
        });
        //    console.log(res);
        res.data.forEach(function (item, index) {
            item.key = index
        })
        this.setState({
            data: res.data
        })
    }
    render() {

        const { formLayout } = this.state;
        const formItemLayout =
            formLayout === 'horizontal'
                ? {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                }
                : null;
        const buttonItemLayout =
            formLayout === 'horizontal'
                ? {
                    wrapperCol: { span: 14, offset: 4 },
                }
                : null;


        return (
            <div style={{
                'padding': '8px 20px 24px'
            }}>
                <div className="content">
                    <div>
                        <Form layout={formLayout}>
                            <Form.Item label="学员姓名" {...formItemLayout}>
                                <Input value={this.state.name} readOnly unselectable="on" />
                            </Form.Item>
                            <Form.Item label="投诉问题" {...formItemLayout}>
                                <TextArea rows={6} placeholder="请输入技术问题" value={this.state.qes}
                                    onChange={this.handleQes.bind(this)}
                                    onKeyDown={this.send.bind(this)} />
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                                <Button type="primary" icon="check" size='large' onClick={this.tiwen.bind(this)}>
                                    提问
                                </Button>
                                <Button type="primary" icon="undo" size='large'>
                                    返回
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
                <Table columns={columns} dataSource={this.state.data} bordered size='small' />
            </div>
        );
    }
}

export default FormLayoutDemo 