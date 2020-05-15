import React, { Component } from 'react';
import { Card, Button, DatePicker, Form, Select, Table, Modal ,message} from 'antd'
import myAxios from '../../axios'
const FormItem = Form.Item
const Options = Select.Option

class order extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.setState({
            ListData: [],
            current: 1,
            selectedRowKeys: [],
            isVisable: false
        })
        this.requestList('ListData', '/order/list')
    }
    onFinish = value => {
        console.log(value)
    }
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
    onRowClick = (record, index) => {
        let selectKey = [index + 1];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    handleCancel=()=>{
        this.setState({
            isVisable:false
        })
    }
    openModal=()=>{
        if(this.state.selectedRowKeys.length>0){
            if(this.state.selectedItem.status==2){
                message.error('行程已结束')
            }else{
                this.setState({
                    isVisable:true
                })
            }
            
        }else{
            message.warning('请选择一条数据')
        }
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render(state) {
                    const config = {
                        '1': '进行中',
                        '2': '行程结束'
                    }
                    return config[state]
                }
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        return (
            <div style={{ width: '100%', minWidth: '970px' }}>
                <Card>
                    <Form layout='inline' initialValues={
                        {
                            city_id: 1 + '',
                            state: 1 + ''
                        }
                    } onFinish={this.onFinish}>
                        <FormItem label='城市' name='city_id'>
                            <Select style={{ width: 100 }}>
                                <Options value='1'>全部</Options>
                                <Options value='2'>北京</Options>
                                <Options value='3'>上海</Options>
                                <Options value='4'>深圳</Options>
                            </Select>
                        </FormItem>
                        <FormItem name='time_start' label='订单时间'>
                            <DatePicker />
                        </FormItem>
                        <FormItem name='time_end'>
                            <div>～    <DatePicker /></div>
                        </FormItem>
                        <FormItem label='订单状态' name='state'>
                            <Select style={{ width: 100 }}>
                                <Options value='1'>全部</Options>
                                <Options value='2'>进行中</Options>
                                <Options value='3'>已结束</Options>
                            </Select>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' htmlType='submit'>查询</Button>
                            <Button >重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <div style={{ marginBottom: 15 }}>
                        <Button type='primary'>订单详情</Button>
                        <Button type='primary' onClick={this.openModal}>结束订单</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={this.state.ListData}
                        scroll={{ x: 900 }}
                        pagination={{
                            current: this.state.current,
                            total: 50,
                            onChange: (page) => {
                                this.setState({
                                    current: page
                                })
                                this.requestList('ListData', '/order/list')
                            }
                        }}
                        rowSelection={{
                            type: 'radio',
                            selectedRowKeys: selectedRowKeys
                        }}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                }
                            };
                        }}
                        onChange={(selectedRowKeys, selectedRows) => {
                            console.log(selectedRowKeys, selectedRows)
                        }}
                    />

                    <Modal title='结束订单' visible={this.state.isVisable} onCancel={this.handleCancel}></Modal>
                </Card>
            </div>
        );
    }
}

export default order;