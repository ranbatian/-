/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './index.less'
import Untils from "../../untils/untils";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.setState({
            userName: `ranbatian`
        })
        setInterval(()=>{
           let systime= Untils.formateDate(new Date())
           this.setState({
               systime
           })
        },1000)
    }
    render() {
        return (
            <div className='contnet'>
                <div className="header-top">
                    <Row>
                        <Col span='24'>
                            <span>欢迎，{this.state.userName}</span>
                            <a href="#">返回</a>
                        </Col>
                    </Row>
                </div>
                <div className="breadcrumb">
                    <Row>
                        <Col span='4' className='breadcrumb-title'>
                            首页
                        </Col>
                        <Col span='20' className='weather'>
                            <span className='date'>{this.state.systime}</span>
                            <span className='weather-detail'>晴</span>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Header;