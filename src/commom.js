import React from 'react'
import { Row } from 'antd';
import './style/common.less'
import Header from './components/CommonHeader'
export default class Common extends React.Component {

    render() {
        return (
            <div>
                <Row className="simple-page">
                    <Header />
                </Row>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}