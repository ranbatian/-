import React, { Component } from 'react';
import { Card, Button, Table, Form, Select } from 'antd'
import axios from 'axios'
const FormItem = Form.Item
const Option = Select.Option

export default class City extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        axios.get('https://www.fastmock.site/mock/dce21ad53bc3a1e796946e16971334a9/test/cityData').then((res) => {
            console.log(res.data)
        })
    }
    requestList = () => {

    }
    //! 表单提交
    onFinish = value => {
        console.log(value)
    }

    addCity = () => {

    }
    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id'
            },
            {
                title: '城市名称',
                dataIndex: 'name'
            },
            {
                title: '用车模式',
                dataIndex: 'mode'
            },
            {
                title: '运营模式',
                dataIndex: 'op_mode'
            },
            {
                title: '加盟商授权状态',
                dataIndex: 'franchisee_name'
            },
            {
                title: '城市管理员',
                dataIndex: 'city_admins'
            },
            {
                title: '城市开通时间',
                dataIndex: 'open_time'
            },
            {
                title: '操作时间',
                dataIndex: 'updata_time'
            },
            {
                title: '操作人',
                dataIndex: 'sys_user_name'
            },
        ]
        return (
            <div style={{ width: '100%' }}>
                <Card>
                    <Form
                        layout='inline'
                        initialValues={{
                            city_id: '全部',
                            mode: '全部',
                            op_mode: '全部',
                            auth_state: '全部'
                        }}
                        onFinish={this.onFinish}
                    >
                        <FormItem label='城市' name='city_id'>
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>北京市</Option>
                                <Option value='2'>天津市</Option>
                                <Option value='3'>深圳市</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='用车模式' name='mode'>
                            <Select placeholder='全部' style={{ width: 120 }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>指定停车点模式</Option>
                                <Option value='2'>禁停区模式</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='运营模式' name='op_mode' >
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>自营</Option>
                                <Option value='2'>加盟</Option>
                            </Select>
                        </FormItem>
                        <FormItem label='加盟商授权状态' name='auth_state'>
                            <Select placeholder='全部' style={{ width: 100 }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>授权</Option>
                                <Option value='2'>未授权</Option>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' style={{ margin: '0 20px' }}>查询</Button>
                            <Button >重置</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card style={{ marginTop: '12px' }}>
                    <Button type='primary' onClick={this.addCity}>开通城市</Button>
                    <Table
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}