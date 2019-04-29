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
                    defaultOpenKeys={['sub1']}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
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