import React from 'react';
import '../css/From.css'
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

class FormLayoutDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
    }

    handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
    };

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
            <div>
                <Form layout={formLayout}>
                    <Form.Item label="投诉内容：" {...formItemLayout}>
                        <TextArea rows={15} placeholder="本投诉是匿名投诉，不会暴露您的信息" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" icon="check" size='large'>
                            添加
                         </Button>
                        <Button type="primary" icon="undo" size='large'>
                            返回
                         </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default FormLayoutDemo 