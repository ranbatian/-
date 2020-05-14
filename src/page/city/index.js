import React, { Component } from 'react';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd'
import myAxios from '../../axios'
const FormItem = Form.Item
const Option = Select.Option

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.setState({
            ListData: [],
            current: 1,
            isVisable: false
        })
        this.requestList('ListData', '/cityData')
    }
    //! 数据获取
    requestList = (stateKeyName, url) => {
        myAxios.ajax({
            url: url,
            data: {
                param: {
                    page: 1
                }
            }
        }).then(res => {
            this.setState({
                data: res,
                [stateKeyName]: res.item_list
            })
        })
    }
    //! 表单提交
    onFinish = value => {
        console.log(value)
    }
    //todo 添加城市
    addCity = () => {
        this.setState({
            isVisable: true
        })
    }
    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '城市名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '用车模式',
                dataIndex: 'modal',
                key: 'modal',
                render(state) {
                    let config = {
                        '1': '指定停车点',
                        '2': '禁停区'
                    }
                    return config[state]
                }
            },
            {
                title: '运营模式',
                dataIndex: 'op_mode',
                key: 'op_mode',
                render(op_mode) {
                    let confir = {
                        '1': '自营',
                        '2': '加盟'
                    }
                    return confir[op_mode]
                }
            },
            {
                title: '加盟商授权状态',
                dataIndex: 'franchisee_name',
                key: 'franchisee_name',
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time',
                key: 'open_time',
            }, {
                title: '操作人员',
                dataIndex: 'city_admins',
                key: 'city_admins',
                render(arr) {
                    return arr.map((item) => {
                        return item.userName
                    }).join(',')
                }
            },
            {
                title: '操作时间',
                dataIndex: 'updata_time',
                key: 'updata_time',
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name',
                key: 'sys_user_name',
            },
        ]
        return (
            <div style={{ width: '100%' }}>
                <Card>
                    <Form
                        layout='inline'
                        initialValues={{
                            city_id: 0+'',
                            mode: 0+'',
                            op_mode: 0+'',
                            auth_state: 0+''
                        }}
                        onFinish={this.onFinish}
                    >
                        <FormItem label='城市' name='city_id'>
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value='0'>全部</Option>
                                <Option value='1'>北京市</Option>
                                <Option value='2'>天津市</Option>
                                <Option value='3'>深圳市</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='用车模式' name='mode'>
                            <Select placeholder='全部' style={{ width: 120 }}>
                                <Option value='0'>全部</Option>
                                <Option value='1'>指定停车点模式</Option>
                                <Option value='2'>禁停区模式</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='运营模式' name='op_mode' >
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value='0'>全部</Option>
                                <Option value='1'>自营</Option>
                                <Option value='2'>加盟</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='加盟商授权状态' name='auth_state'>
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value='0'>全部</Option>
                                <Option value='1'>授权</Option>
                                <Option value='2'>未授权</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' style={{ margin: '0 20px' }} htmlType='submit'>查询</Button>
                            <Button >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card style={{ marginTop: '12px' }}>
                    <Button type='primary' onClick={this.addCity} style={{ marginBottom: '9px' }}>开通城市</Button>
                    <Table
                        columns={columns}
                        dataSource={this.state.ListData}
                        pagination={
                            {
                                current: this.state.current,
                                total: 50,
                                onChange: (page) => {
                                    this.setState({
                                        current: page
                                    })
                                    this.requestList('ListData', '/cityData')
                                }
                            }
                        }
                    />
                    <Modal
                        title='添加城市'
                        visible={this.state.isVisable}
                        onCancel={() => {
                            this.setState({
                                isVisable: false
                            })
                        }}
                        onOk={() => {
                            message.success('添加成功')
                            this.setState({
                                isVisable: false
                            })
                        }}
                    >
                        <Form initialValues={{
                            city_id: 1 + '',
                            op_mode: 1 + '',
                            mode: 1 + ''

                        }}>
                            <FormItem label='选择城市' name='city_id'>
                                <Select>
                                    <Option value='1'>北京市</Option>
                                    <Option value='2'>天津市</Option>
                                    <Option value='3'>深圳市</Option>
                                </Select>
                            </FormItem>
                            <FormItem label='运营模式' name='op_mode'>
                                <Select>
                                    <Option value='1'>自营</Option>
                                    <Option value='2'>授权</Option>
                                </Select>
                            </FormItem>
                            <FormItem label='用车模式' name='mode'>
                                <Select>
                                    <Option value='1'>指定停车点</Option>
                                    <Option value='2'>禁停区</Option>
                                </Select>
                            </FormItem>
                        </Form>
                    </Modal>
                </Card>
            </div>
        );
    }
}