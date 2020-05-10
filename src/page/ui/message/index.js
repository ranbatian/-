import React, { Component } from 'react';
import { Card, Button, message } from "antd";
import './index.less'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    showMessage = (type) => {
        message[type](`this is a ${type} message`)
    }
    showUpdataMessage = () => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
            message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
    }


    render() {
        return (
            <div className='wrap-box'>
                <Card title='Message全局提示'>
                    <Button type='primary' onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.showMessage('error')}>Error</Button>
                    <Button type='primary' onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.showMessage('loading')}>loading</Button>
                    <Button type='primary' onClick={this.showUpdataMessage}>updata</Button>
                </Card>
            </div>
        );
    }
}

export default Message;