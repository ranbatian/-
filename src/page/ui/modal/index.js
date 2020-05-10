import React, { Component } from 'react';
import { Card, Button, Modal } from "antd";
import './index.less'

class Modalcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认？',
            content:'确认关闭吗？',
            onOk(){
                console.log('ok')
            },onCancel(){
                console.log('cancel')
            }
        })
    }
    render() {
        return (
            <div className='modal-content'>
                <Card title='基础模态框' className='modal-box'>
                    <Button type='primary' onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title='状态模态框' className='modal-box'>
                    <Button type='primary' onClick={() => this.handleConfirm('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('info')}>Infro</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('error')}>Error</Button>
                </Card>
                <Modal title='通知' visible={this.state.showModal1} onCancel={() => { this.setState({ showModal1: false }) }}>
                    <p>这就是个通知</p>
                </Modal>
                <Modal title='通知' okText='下一步' cancelText='算了' visible={this.state.showModal2} onCancel={() => { this.setState({ showModal2: false }) }}>
                    <p>这就是个通知</p>
                </Modal>
                <Modal title='通知' style={{ top: 20 }} visible={this.state.showModal3} onCancel={() => { this.setState({ showModal3: false }) }}>
                    <p>这就是个通知</p>
                </Modal>
                <Modal title='通知' wrapClassName='vertical-center-modal' visible={this.state.showModal4} onCancel={() => { this.setState({ showModal4: false }) }}>
                    <p>这就是个通知</p>
                </Modal>
            </div>
        );
    }
}

export default Modalcontent;