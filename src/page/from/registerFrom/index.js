import React, { Component } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, Upload, message, InputNumber, Row, Col } from 'antd'
import './index.less'
import { UserOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

//! 判断文件类型
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


class FromRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            loading: false
        }
    }
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    successRegister=()=>{
        message.success('注册成功!!!');
    }
    render() {

        const fromItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        }
        const onFinish = values => {
            console.log(values)
        };
        function onChange(checked) {
            console.log(`switch to ${checked}`);
        }


        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;


        return (
            <div className='wrap-content'>
                <Card title='注册表单'>
                    <Form style={{ width: '60%', margin: 'auto' }} onFinish={onFinish}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入你的用户名!' }]}
                            label='用户名'
                            {...fromItemLayout}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入你的密码' }]}
                            label='密码'
                            {...fromItemLayout}
                        >
                            <Input.Password prefix={<UserOutlined className="site-form-item-icon" />} placeholder="密码" />
                        </Form.Item>
                        <Form.Item
                            name="sex"
                            label='性别'
                            {...fromItemLayout}
                        >
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="age"
                            rules={[{ required: true, message: '请输入你的年纪!' }]}
                            label='年龄'
                            {...fromItemLayout}
                        >
                            <InputNumber min={1} max={110} defaultValue={18} />
                        </Form.Item>
                        <Form.Item
                            name="state"
                            label='状态'
                            {...fromItemLayout}
                        >
                            <Select >
                                <Option value="stateA">风华浪子</Option>
                                <Option value="stateB">闲鱼一条</Option>
                                <Option value="stateC">北大才子</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="hobby"
                            label='爱好'
                            {...fromItemLayout}
                        >
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="选择爱好"
                                optionLabelProp="label"
                            >
                                <Option value="basketball" label="篮球">
                                    <div className="demo-option-label-item">
                                        篮球
                          </div>
                                </Option>
                                <Option value="tennis" label="网球">
                                    <div className="demo-option-label-item">
                                        网球
                          </div>
                                </Option>
                                <Option value="football" label="足球">
                                    <div className="demo-option-label-item">
                                        足球
                          </div>
                                </Option>
                                <Option value="fishing" label="钓鱼">
                                    <div className="demo-option-label-item">
                                        钓鱼
                          </div>
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="marriage"
                            label='是否已婚'
                            {...fromItemLayout}
                        >
                            <Switch onChange={onChange} defaultChecked />
                        </Form.Item>
                        <Form.Item
                            name="birthday"
                            label='生日'
                            {...fromItemLayout}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label='联系地址'
                            {...fromItemLayout}
                            rules={[{ required: true, message: '请输入你的地址' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            name="headPortrait"
                            label='头像'
                            {...fromItemLayout}
                        >
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            name="agree"
                        >
                        <Row>
                        <Col span={4}></Col>
                        <Col span={20}> <Checkbox>我已阅读协议</Checkbox></Col>
                        </Row>
                        </Form.Item>

                        <Row>
                        <Col span={4}></Col>
                        <Col span={20}><Button type="primary" htmlType="submit" className="login-form-button" onClick={this.successRegister}>注册</Button></Col>
                        </Row>
                    </Form>
                </Card>
            </div>
        );
    }
}
export default FromRegister