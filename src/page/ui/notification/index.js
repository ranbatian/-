import React, { Component } from 'react';
import { Card, Button, notification } from 'antd'
import './index.less'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    openNotification = (type) => {
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }
    openDifrentNotification = position => {
        notification.info({
            message: 'Notification Title',
            placement: position,
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    }
    render() {
        return (
            <div className='notification-box'>
                <Card title='提示框' className='wrap-box'>
                    <Button type='primary' onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title='提示框位置变换' className='wrap-box'>
                    <Button type='primary' onClick={() => this.openDifrentNotification('topLeft')}>left-top</Button>
                    <Button type='primary' onClick={() => this.openDifrentNotification('bottomLeft')}>left-bottom</Button>
                    <Button type='primary' onClick={() => this.openDifrentNotification('topRight')}>righr-top</Button>
                    <Button type='primary' onClick={() => this.openDifrentNotification('bottomRight')}>right-bottom</Button>
                </Card>
            </div>
        );
    }
}

export default Notification;