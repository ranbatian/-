import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card ,notification} from 'antd'
import './index.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const FormItem = Form.Item

class loginFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const onFinish = values => {
            console.log(values)
              notification.info({
                  message:'没想到吧',
                  description:`用户名是  ${values.username},密码是  ${values.password}`,
                  duration:2
              });
        };
        return (
            <div className='wrap-box'>
                <Card title='Baisc From'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名'></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码'></Input>
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='基础登录框'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        style={{width:'400px'}}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入你的用户名!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入你的密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                  </Button>
                  或 <a href="">现在注册</a>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

        );
    }
}

export default loginFrom;