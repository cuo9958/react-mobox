/**
 * 页面模版
 */
import React from 'react';
import { inject } from 'mobx-react';
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const { Sider, Header, Content } = Layout;

@inject(models => ({
    initCollapsed: models.menu.initCollapsed,
    collapsed: models.menu.collapsed,
    trigger: models.menu.trigger
}))
class LayoutClass extends React.Component {

    topMenu = <Menu>
        <Menu.Item key="0" className="text-center">
            <Link to="/">个人中心</Link>
        </Menu.Item>
        <Menu.Item key="1" className="text-center">
            <Link to="/">设置</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" className="text-center">
            <Link to="/">退出</Link>
        </Menu.Item>
    </Menu>

    render() {
        return <Layout className="layout">
            <Sider className="menu"
                collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    inlineCollapsed={this.props.initCollapsed}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={[]}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="setting" /><span>设置</span></span>}>
                        <Menu.Item key="5">基础设置</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="container">
                <Header className="header">
                    <div>
                        <Icon
                            width="100px"
                            height="100px"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </div>
                    <div className="top-menu">
                        <Dropdown overlay={this.topMenu}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Dropdown>
                    </div>
                </Header>
                <Content className="content">
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    }

    toggle = () => {
        this.props.trigger();
    }
}

export default LayoutClass;