import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../css/detail.css'
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Input,
    Button,
    Row,
    Col,
    message
} from 'antd';
const { TextArea } = Input;
const { Option } = Select;

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},

        }
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let results = await this.$axios({
            method: 'post',
            url: 'http://localhost:22222/good/find',
            data: this.$qs.stringify({
                id
            })
        })
        this.setState({
            data: results.data[0]
        })
        // console.log(this.state.data[0].title);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let { name, subhead, price, oldprice, kucun, type, info, } = values;
                let result = await this.$axios({
                    method: 'post',
                    url: 'http://localhost:22222/good/update',
                    data: this.$qs.stringify({
                        name, subhead, price, oldprice, kucun, type, info,
                        id:this.state.data.id
                    })
                })
                if(result.statusText=="OK"){
                    message.info('修改成功');
                }else{
                    message.info('修改失败请重试');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        // 几种布局
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span: 18 },
        };
        const formItemLayout2 = {
            labelCol: { span: 6 },
            wrapperCol: { span: 12 },
        };
        const formItemLayout3 = {
            labelCol: { span: 2 },
            wrapperCol: { span: 12 },
        };
        const formItemLayout4 = {
            labelCol: { span: 2 },
            wrapperCol: { span: 22 },
        };
        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="商品名称" {...formItemLayout4} >
                        <Row gutter={8}>
                            <Col span={15}>
                                {getFieldDecorator('name', { initialValue: this.state.data.name })(<Input />)}
                            </Col>
                            <Col span={8}>
                                50字以内
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="商品副标题" {...formItemLayout4}>
                        <Row gutter={8}>
                            <Col span={15}>
                                {getFieldDecorator('subhead', { initialValue: this.state.data.subhead })(<Input />)}
                            </Col>
                            <Col span={8}>
                                100字以内
                            </Col>
                        </Row>
                    </Form.Item>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Form.Item label="商品价格" {...formItemLayout2}>
                                {getFieldDecorator('oldprice', { initialValue: this.state.data.oldprice })(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="售出价格" {...formItemLayout2}>
                                {getFieldDecorator('price', { initialValue: this.state.data.price })(<Input />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="商品分类">
                        {getFieldDecorator('type', { initialValue: this.state.data.type })(
                            <Select
                                onChange={this.handleSelectChange}>
                                <Option value="手机">手机</Option>
                                <Option value="电脑">电脑</Option>
                                <Option value="平板">平板</Option>
                                <Option value="配件">配件</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="商品图片">
                        <img src="https://img.alicdn.com/imgextra/i3/63191668/O1CN01EhqEi21OBzBomt2UE_!!0-saturn_solar.jpg_220x220.jpg_.webp"></img>
                        <img src="https://img.alicdn.com/imgextra/i3/63191668/O1CN01EhqEi21OBzBomt2UE_!!0-saturn_solar.jpg_220x220.jpg_.webp"></img>
                        <img src="https://img.alicdn.com/imgextra/i3/63191668/O1CN01EhqEi21OBzBomt2UE_!!0-saturn_solar.jpg_220x220.jpg_.webp"></img> <br />
                        {getFieldDecorator('img0')(
                            <Radio.Group>
                                <Radio value="a">设为封面</Radio>
                                <Radio value="b">设为封面</Radio>
                                <Radio value="c">设为封面</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="库存">
                        {getFieldDecorator('kucun', { initialValue: this.state.data.kucun })(<InputNumber min={1} />)}
                    </Form.Item>
                    <Form.Item label="上架" >
                        {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch checkedChildren="on" unCheckedChildren="off" />)}
                    </Form.Item>
                    <Form.Item label="商品属性">
                        {getFieldDecorator('radio-button')(
                            <Radio.Group>
                                <Radio.Button value="热卖">热卖</Radio.Button>
                                <Radio.Button value="推荐">推荐</Radio.Button>
                                <Radio.Button value="促销">促销</Radio.Button>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="商品描述"  {...formItemLayout3}>
                        {getFieldDecorator('info', { initialValue: this.state.data.info })(<TextArea rows={6} />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 2 }}>
                        <Button type="primary" htmlType="submit">
                            确认
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);





export default withRouter(WrappedDemo) 
