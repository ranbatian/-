import React, { Component } from 'react';
import './index.css'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MenuData from '../../config/Menuconfig'

const { SubMenu } = Menu;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        const menuNodeTree = this.renderMenu(MenuData)
        this.setState({
            menuNodeTree
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <div className='logo'>
                    <div className=''>
                        <img src={`assets/logo-ant.svg`} alt="main-logo" />
                        <h1>Ran MS</h1>
                    </div>
                </div>
                <Menu style={{ width: 256 }} mode="vertical" theme='dark' className='main-nav'>
                    {this.state.menuNodeTree}
                </Menu>
            </div>
        );
    }
}

export default Nav;