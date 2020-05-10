import React, { Component } from 'react';
import { Card, Button } from "antd";
import './index.less'
import { SearchOutlined, DownloadOutlined, EditFilled, DeleteOutlined } from '@ant-design/icons';

class ButtonUi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='main-content'>
                <div className="card-box">
                    <Card title='基础按钮'>
                        <Button type='primary'>Click</Button>
                        <Button>Click</Button>
                        <Button type='dashed'>Click</Button>
                        <Button type='danger'>Click</Button>
                        <Button disabled>Click</Button>
                    </Card>
                </div>
                <div className="card-box">
                    <Card title='图形按钮'>
                        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                        <Button icon={<DownloadOutlined />} size={'middle'}>Download</Button>
                        <Button type="dashed" icon={<EditFilled />} size={'middle'}>Edit</Button>
                        <Button type="danger" icon={<DeleteOutlined />} size={'middle'}>Delete</Button>
                        <Button disabled shape="circle" icon={<SearchOutlined />} />
                    </Card>
                </div>
                <div className="card-box">
                    <Card title='加载状态按钮'>
                        <Button type="primary" icon={<SearchOutlined />} loading>Search</Button>
                        <Button icon={<DownloadOutlined />} size={'middle'} loading>Download</Button>
                        <Button type="dashed" icon={<EditFilled />} size={'middle'} loading>Edit</Button>
                        <Button type="danger" icon={<DeleteOutlined />} size={'middle'} loading>Delete</Button>
                        <Button disabled shape="circle" loading/>
                    </Card>
                </div>

            </div>
        );
    }
}

export default ButtonUi;