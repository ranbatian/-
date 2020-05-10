import React, { Component } from 'react';
import { Card, Spin, Alert } from "antd";
import './index.less'
import { LoadingOutlined } from '@ant-design/icons';

class Loaddings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const loadingIcon = <LoadingOutlined />
        return (
            <div className='spin-box'>
                <Card title='spin展示' className='wrap-box'>
                    <Spin size='small' />
                    <Spin style={{ marginLeft: '20px' }} />
                    <Spin size='large' style={{ marginLeft: '20px' }} />
                    <Spin size='large' style={{ marginLeft: '20px' }} indicator={loadingIcon} />
                </Card>
                <Card title='spin展示' className='wrap-box'>
                    <Spin tip='loading...'>
                        <Alert
                            message='展示'
                            description='没错，你就是卡了'
                            type='warning'
                            showIcon
                        />
                    </Spin>
                    <Spin tip='loading...' indicator={loadingIcon}>
                        <Alert
                            message='展示'
                            description='没错，你就是卡了'
                            type='error'
                            showIcon
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loaddings;