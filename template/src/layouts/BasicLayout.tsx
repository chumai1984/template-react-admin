import React, { Fragment } from 'react';
import {connect} from 'dva';
import { Layout, Menu } from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import { Link } from 'umi';
import styles from './layout.less';
import {WIcon} from '../utils/tool';
import AvatarDropdown from '@/components/AvatarDropdown/index'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class BasicLayout extends React.Component<any> {
  state = {
  };

  componentDidMount() {
  }

  onCollapse = collapsed => {
    const {dispatch} = this.props
    dispatch({
      type: 'global/updateState',
      payload: {
        layout: {
          collapsed,
          width: collapsed ? 80 : 200
        }
      }
    })
  };

  renderMenu = (menuData, collapsed) => {
    return menuData.map((item, index) => {
      if (!item.hideInMenu && item.path) {
        if (item.routes && item.routes.length > 0) {
          return (
            <SubMenu title={
              <Fragment>
                 <WIcon type={item.icon || ' '} /> {collapsed ? '' : item.name}
              </Fragment>
            } key={`${item.name}-${item.path}-${index}`}>
              {this.renderMenu(item.routes, false)}
            </SubMenu>
          )
        }
        return <Menu.Item title={item.name} key={`${item.name}-${item.path}-${index}`}><Link to={item.path}><WIcon type={item.icon || ' '} /> {collapsed ? '' : item.name}</Link></Menu.Item>
      }
    })
  }


  render() {
    // const { collapsed, collapsedWidth } = this.state;
    const {children, route, global} = this.props
    const {routes} = route
    const {layout: {collapsed, width}} = global

    return (
      <Layout style={{ minHeight: '100vh' }} className={styles.container}>
        <Sider className={styles.sider} collapsible collapsed={collapsed} width={width} onCollapse={this.onCollapse}>
          <div className="logo">Inbiz</div>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {this.renderMenu(routes, collapsed)}
          </Menu>
        </Sider>

        <Layout className="site-layout" style={{marginLeft: width, transition: 'all 0.2s'}}>
          <Header className="flex" style={{left: width, transition: 'all 0.2s'}}>
            <div className="grid cursor"><span className={styles.collapsed} onClick={() => this.onCollapse(!collapsed)}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span></div>
            <div className="grid align-right"><AvatarDropdown /></div>
          </Header>

          <Content>
            {children}
          </Content>

          <Footer>Inbiz Copyright Information</Footer>
        </Layout>
      </Layout>
    );
  }
};

export default connect(({global, router}:any) => ({global, routing: router}))(BasicLayout);
