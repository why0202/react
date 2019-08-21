import React, { Component } from 'react';
import Title from '../../components/Title';
import '../../css/Itemupload.css'
import {  Button, } from 'antd';

class Itemupload extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    submit(){
        console.log('hhh');
    }
    render() {
        
        return (
            <div >
                <Title title="项目上传" content='学员项目上传' style={{ 'color': '#393939', 'fontSize': '22px' }}></Title>
                <div style={{
                    'padding': '0px 12px '
                }}>
                    <div className="table-content">
                        <form className="form-horizontal" id="actionform" action="" >
                            <div className="form-group clearfix" >
                                <label className="fl " > 项目文件： </label>
                                <div className="col-sm-10 fl">
                                    <div className="fl" >
                                        <input type="file" name="itemupload" id="file" />
                                    </div>
                                    <span ><b>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</b></span>
                                </div>
                            </div>

                            <div className="from-button" >
                                <Button type="primary" icon="check" size='large' onClick={this.submit.bind(this)}>
                                    提交
                                </Button>
                                <Button type="primary" icon="undo" size='large'>
                                    返回
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Itemupload;