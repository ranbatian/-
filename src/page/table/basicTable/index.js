import React, { Component } from 'react';
import { Card, Table, message, Button } from 'antd'
import myAxios from '../../../axios/index'
class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //! axios的配置数据
    params = {
        page: 1
    }
    //! 获取多选框的选中item
    showCheckedItem = () => {
        console.log(this.state.selectedCheckRowKeys.join(','))
        message.success(`选中的id是：${this.state.selectedCheckRowKeys.join(',')}`)
    }
    //! 绑定点击事件，获取点击对象
    onRowClick = (record, index) => {
        let selectKey = [index + 1]
        this.setState({
            selectedRowKeys: selectKey,
            selectRowItem: record
        })
        message.success(`成功获取，用户名为:${record.userName}`)
        this.request()
    }
    onRowClickCheck = (record, index) => {
        let  selectedCheckRowKeys  = this.state.selectedCheckRowKeys || []
        let CheckRowitem=this.state.selectedCheckRowitem|| []
        selectedCheckRowKeys.push(index+1)
        CheckRowitem.push(record)
        this.setState({
            selectedCheckRowKeys,
            selectedCheckRowitem:CheckRowitem
        })
    }
    //! 声明周期函数，数据初始化
    componentWillMount() {
        const dataSource = [
            {
                id: '1',
                userName: 'jack',
                sex: '男妈妈',
                state: 'good',
                birthday: '2000-1-1',
                key: 1
            },
            {
                id: '2',
                userName: 'sam',
                sex: '男妈妈',
                state: 'good',
                birthday: '2000-1-1',
                key: 1
            },
            {
                id: '3',
                userName: 'kit',
                sex: '男妈妈',
                state: 'good',
                birthday: '2000-1-1',
                key: 1
            },
            {
                id: '4',
                userName: 'lucky',
                sex: '男妈妈',
                state: 'good',
                birthday: '2000-1-1',
                key: 1
            },
        ]

        this.setState({
            dataSource,
            dataSource2: []
        })
        this.request()

    }
    //! 动态获取数据
    request = () => {
        myAxios.ajax({
            url: '/tableList',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            this.setState({
                dataSource2: res,
                selectedCheckRowKeys:[]
            })
        })
    }
    render() {
        //! 表头二
        const columns2 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    // eslint-disable-next-line eqeqeq
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        //! 表头一
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                align: 'center'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                align: 'center'
            },
            {
                title: '状态',
                dataIndex: 'state',
                align: 'center'
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                align: 'center'
            }
        ]
        const { selectedRowKeys, selectedCheckRowKeys } = this.state
        //! 单选的rowSelection配置
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        //! 多选的rowSelection配置
        const rowSelectionCheck = {
            type: 'checkbox',
            selectedCheckRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                const ids = []
                selectedRows.map(item => ids.push(item.id))
                this.setState({
                    selectedCheckRowKeys: selectedRowKeys,
                    selectedids: ids
                })
            }
        }
        return (
            <div style={{ width: '100%' }}>
                <Card title='基础表格'>
                    <Table columns={columns} dataSource={this.state.dataSource} bordered tableLayout='auto' pagination={false} />
                </Card>
                <Card title='动态渲染'>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false} />
                </Card>
                <Card title='Mock-单选'>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                } // 点击行
                            };
                        }}
                        rowSelection={rowSelection}
                    />
                </Card>
                <Card title='Mock-多选'>
                    <div style={{ marginBottom: '9px' }}>
                        <Button onClick={this.showCheckedItem}>查查看已选中的</Button>
                    </div>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClickCheck(record, index)
                                } // 点击行
                            };
                        }}
                        rowSelection={rowSelectionCheck}
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTable;