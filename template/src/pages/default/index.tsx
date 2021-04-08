import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';
import { Button, Spin, Divider, Typography } from 'antd';
import { WIcon } from '@/utils/tool';
import router from 'umi/router';
import Cookies from 'js-cookie';

import PptList from '../components/PptList';
import PptView from '../components/PptView';
const { Text, Paragraph, Title } = Typography;


class contentView extends React.Component<any> {
  state = {};

  componentDidMount() {
  }

  // eg:reducers
  changeReduces = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'content/updateState',
      payload: {
        cc: `change CCCCCCCCCCCCC${new Date().getTime()}`,
        dd: `改变后的dd${new Date().getTime()}`,
      },
    });
  };

  // eg:getList
  getUserInfo = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'content/getUserInfo',
      payload: {
        token: Cookies.get('token'),
      },
    });
  };

  // 路由跳转
  jump = (id) => {
    router.push(`/content/${id}`);
  };


  render() {
    const { content, loading } = this.props;
    const { cc, dd, userInfo } = content;

    // pptList参数
    const PptListProps = {
      title: 'ppt列表',
      list: [1, 2],
    };

    // pptView参数
    const PptViewProps = {
      title: 'ppt预览',
    };

    return (
      <div className={styles.contentWrap}>
        <Divider>readme</Divider>
        <Typography>
        <Title level={3}>简介</Title>
          <Paragraph>
            <dl>
              <dd><strong>基于umi + dva + antd，高性能，开发启动快，兼容IE10+，TypeScript支持~</strong></dd>
              <dd>Umi[^2.x版本] 实现了完整的生命周期，并使其插件化，内置了路由、构建、部署、测试等。</dd>
              <dd>Dva 基于redux和redux-saga的数据流方案。</dd>
              <dd>Antd[^4.x版本]</dd>
              <dd>引入常用库：lodash，js-cookie，moment</dd>

              <dd></dd><br />
              <dd>简单配置，快速上手</dd>
              <dd>启动项目 yarn && yarn start 或者 npm install && npm run start</dd>
              <dd>1、/config/config 配置代理URL => proxyURL，（调通API接口，对接后台数据）</dd>
              <dd>2、/config/config 配置路由 => routes （添加路由，添加页面，正式项目开发）</dd>
            </dl>
          </Paragraph>
        </Typography>
        

        <Divider>Icon Demo</Divider>
        <div>
          <WIcon type='iconclose'></WIcon>&nbsp;&nbsp;
          <WIcon type='iconbianji'></WIcon>&nbsp;&nbsp;
          <WIcon type='iconsimi' className='f16' style={{ color: 'red' }}></WIcon>&nbsp;&nbsp;<br /><br />
          <Text code>说明：新项目svg转Icon图标请联系【马飞燕】统一管理</Text>
        </div>

        <Divider>数据流 Demo</Divider>
        <Button onClick={this.changeReduces} type={'primary'}>改变reducers</Button>
        <div>{cc}</div>
        <div>{dd}</div><br/>
        <Button onClick={this.getUserInfo} type={'primary'}>数据交互流程</Button>
        {
          loading.effects['content/getUserInfo'] && <Spin/>
        }
        <div>{userInfo.Account} - {userInfo.ID} - {userInfo.Name}</div>

        <Divider>组件及组件传参 Demo</Divider>
        <div>
          <PptList {...PptListProps} />
          <PptView {...PptViewProps} />
        </div>

      </div>
    );
  }
}

export default connect(({ content, loading }: any) => ({ content, loading }))(contentView);
