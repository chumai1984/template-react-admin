import React, { Fragment } from 'react';
import {connect} from 'dva';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import styles from './layout.scss';
import {WIcon} from '../utils/tool';
import AvatarDropdown from '@/components/AvatarDropdown/index'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class BasicLayout extends React.Component<any> {
  state = {
    collapsed: false,
  };

  componentDidMount() {
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  renderMenu = (menuData, collapsed) => {
    return menuData.map((item, index) => {
      if (!item.hideInMenu && item.path) {
        if (item.routes && item.routes.length > 0) {
          return (
            <SubMenu title={
              <Fragment>
                 <WIcon type={item.icon} /> {collapsed ? '' : item.name}
              </Fragment>
            } key={`${item.name}-${item.path}-${index}`}>
              {this.renderMenu(item.routes, false)}
            </SubMenu>
          )
        }
        return <Menu.Item title={item.name} key={`${item.name}-${item.path}-${index}`}><Link to={item.path}><WIcon type={item.icon} /> {collapsed ? '' : item.name}</Link></Menu.Item>
      }
    })
  }


  render() {
    const { collapsed } = this.state;
    const {children, route} = this.props
    const {routes} = route

    return (
      <Layout style={{ minHeight: '100vh' }} className={styles.container}>
        <Sider className={styles.sider} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">Inbiz</div>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            {this.renderMenu(routes, collapsed)}
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="align-right"><AvatarDropdown /></Header>

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
