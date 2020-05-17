import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './index.less'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Row className='header'>
                <Col span={6} className='header-title'>通用管理系统</Col>
                <Col span={12}></Col>
                <Col span={6} className='choice'>
                    <Row>
                        <Col span={18}>欢迎,coderan</Col>
                        <Col span={4}><a href="#">退出</a></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Header;