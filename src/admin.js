import React, { Component } from 'react';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Row className='container'>
                <Col span='4' className='nav-left'>
                    <NavLeft />
                </Col>
                <Col span='20' className='main'>
                    <Header />
                    <Row className='content'>
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}

export default admin;