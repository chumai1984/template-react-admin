import React from 'react';
import {connect} from "dva";
import { Form, Input, Button } from 'antd';
import config from '@/utils/config'
import Cookies from 'js-cookie';
import styles from './index.scss';

class loginView extends React.Component {

  formRef = React.createRef();

  state = {}
  componentDidMount() {
  }

  // 登录
  handleSubmit = (values) => {
    Cookies.set('token', values.token)
    location.href = '/'
  };

  render() {
    return (
      <div className={styles.loginWrap}>
        <h1 className='align-center'>edoc2 - 开发者登录</h1>
        <div>
          <Form ref={this.formRef} onFinish ={this.handleSubmit} className="login-form">
            <Form.Item name="token">
              <Input placeholder="请输入token进行登录" />
            </Form.Item>
            <Form.Item className='align-center'>
              <div className={'text-center pointer'}>进入站点：<a target={'_blank'} href={config && config.PROXY_URL}>{config && config.PROXY_URL}</a></div>
            </Form.Item>
            <Form.Item className='align-center'>
              <Button htmlType="submit" type='primary'>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(({login}: any)=>({login}))(loginView)
