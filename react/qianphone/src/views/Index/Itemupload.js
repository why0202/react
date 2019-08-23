import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../store/store';
import Title from '../../components/Title';
import '../../css/Itemupload.css'
import { Button, } from 'antd';

class Itemupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
    }
    // 提交
    submit() {
        // console.log(this.state.file);
        const param = new FormData();
        param.append("file", this.state.file);
        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };
        this.$axios.post("http://localhost:3200/upload/upload", param, config).then(res => {
            // console.log(res.data.filename);
            let imgurl = `http://localhost:3200/images/${res.data.filename}`
            store.dispatch({
                type: 'setimg',
                imgurl
            })
        });
    }
    // 选文件
    onChange(e) {
        this.setState({
            file: e.target.files[0]
        })
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
                                        <input type="file" name="itemupload" onChange={this.onChange.bind(this)} />
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

export default connect((state) => {
    return state
})(Itemupload);