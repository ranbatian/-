import React, { Component } from 'react';
import { Card, Table, message, Button } from 'antd'
import myAxios from '../../../axios/index'


class aaa extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    params = {
        page: 1
    }
    componentWillMount() {
        this.request('dataSource2','/tableList')
        this.request('dataSource3','/table/heigh')

    }
    request = (keyName,url) => {
        myAxios.ajax({
            url: url,
            data: {
                params: {
                    page: 1
                }
            }
        }).then(res => {
            this.setState({
                [keyName]: res,
                selectedCheckRowKeys: []
            })
        })
    }
    render() {
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
        const columns1 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id',
                width: '80',
                fixed: 'left'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: '80',
                fixed: 'left'
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
                },
                width: '80'
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
                },
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: '80',
                fixed: 'right'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: '80',
                fixed: 'right'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            }, {
                title: '年纪',
                key: 'age',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                }
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
        return (
            <div style={{ width: '100%' }}>
                <Card title='Table头部固定'>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        scroll={{ y: 220 }}
                    />
                </Card>
                <Card title='Table头左右'>
                    <Table
                        columns={columns1}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}
                        scroll={{ x: 1700, y: 220 }}
                    />
                </Card>
                <Card title='排序表格'>
                <Table 
                columns={columns3}
                dataSource={this.state.dataSource3}
                pagination={false}
                />
                </Card>
            </div>
        );
    }
}

export default aaa;