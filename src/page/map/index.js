/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Card, Form, DatePicker, Select, Button } from 'antd'
import { Map, Marker, NavigationControl, InfoWindow ,Polygon} from 'react-bmap'

const FormItem = Form.Item
const Options = Select.Option

class bikeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
    }
    onFinish = value => {
        console.log(value)
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Card>
                    <Form layout='inline' initialValues={
                        {
                            city_id: 1 + '',
                            state: 1 + ''
                        }
                    } onFinish={this.onFinish}>
                        <FormItem name='time_start' label='订单时间'>
                            <DatePicker />
                        </FormItem>
                        ~
                        <FormItem name='time_end'>
                            <DatePicker />
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
                        </FormItem>
                    </Form>
                </Card>
                <Card style={{ marginTop: '10px' }}>
                    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11" style={{ height: '500px' }} enableScrollWheelZoom={true}>
                        <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
                        <NavigationControl />
                        <Polygon
                            fillColor='red'
                            strokeColor='yellow'
                            path={[
                                { lng: 116.442519, lat: 39.945597 },
                                { lng: 116.484488, lat: 39.905315 },
                                { lng: 116.443094, lat: 39.886494 },
                                { lng: 116.426709, lat: 39.900001 }
                            ]}
                        />
                    </Map>
                </Card>
            </div>
        );
    }
}

export default bikeMap;