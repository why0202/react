import React, { Component } from 'react';
import '../css/Login.css';
import '../Iconfont/iconfont.css'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      code: '',
      rightcode: '',
      alert: false,
      errtip:''
    }
  }
  componentDidMount() {
    this.securityCode();
  }
  //验证码
  securityCode() {
    var arr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var num = "";
    for (let i = 0; i < 4; i++) {
      //创建随机数作为下标
      var sub = parseInt(Math.random() * arr.length);
      //随机数拼接
      num += arr[sub];
    }
    // console.log(num);
    this.setState({
      rightcode: num
    })
  }
  changeuser(e) {
    this.setState({
      username: e.target.value
    })
  }
  changepassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  changecode(e) {
    this.setState({
      code: e.target.value
    })
  }
  async login() {
    if (this.state.password && this.state.username && this.state.code) {
      if (this.state.rightcode == this.state.code) {
        await this.$axios({
          method: "post",
          url: `http://localhost:3200/login/login`,
          data: this.$qs.stringify({
              username: this.state.username,
              password: this.state.password,
          })
      }).then(res => {
        console.log(res);
        if (res.data) {
          this.setState({
            alert: false,
            errtip:'',
          })
          window.localStorage.setItem('stuid', res.data[0].stuid);
          window.localStorage.setItem('name', res.data[0].name);
          // console.log(this);
          this.props.history.push('/index/index')
        } else {
          this.setState({
            alert: true,
            errtip: '账号密码错误',
          })
          this.securityCode()
        }
      });
      } else {
        this.setState({
          alert: true,
          errtip:'验证码错误'
        })
        this.securityCode()
      }

    } else {
      this.setState({
        alert: true,
        errtip:'请输入完整的信息'
      })
      this.securityCode()
    }
  }
  render() {
    return (
      <div className='warp'>
        <div>
          <img src="https://cas.1000phone.net/cas/images/login/logo.png" alt="" />
          <div className="line"></div>
          <p className="tip">使用用户名登录</p>
          <form >
            <div className='alert' style={{ 'display': this.state.alert ? 'block' : 'none' }}>
              {this.state.errtip}
            </div>
            <br />
            <div>
              <i className='iconfont  icon-yonghuuser145'></i>
              <input type="text" placeholder='请输入用户名' onChange={this.changeuser.bind(this)} value={this.state.username} />
              <span className="fr">@1000phone.com</span>
            </div>
            <div className="line"></div>
            <div>
              <i className='iconfont  icon-mimasuo'></i>
              <input type="password" placeholder='请输入密码' onChange={this.changepassword.bind(this)} value={this.state.password} />
            </div>
            <div className="line"></div>
            <div>
              <i className='iconfont  icon-yanzhengyanzhengma'></i>
              <input type="text" placeholder='请输入验证码' onChange={this.changecode.bind(this)} value={this.state.code} />
              <span className="codepic" onClick={this.securityCode.bind(this)}>{this.state.rightcode}</span>
            </div>
            <div className="line"></div>
            <div>
              <i className='iconfont icon-wangjimima'></i>
              <a href="#">忘记密码</a>
            </div>
            <button type='button' onClick={this.login.bind(this)}>登录</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;