import React, { Component } from 'react';
import { Card, Tabs } from 'antd'
import './index.less'
import { AppleOutlined, WindowsOutlined } from '@ant-design/icons'
const { TabPane } = Tabs


class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        let panes = [
            { title: `Tab 1`, content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
        ];
        this.setState({
            panes,
            activeKey: panes[0].key
        })
    }
    newTabIndex=1
    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div className='wrap-box'>
                <Card title='Tab基础标签页' className='content-box'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab图标标签页' className='content-box'>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><AppleOutlined />Tab 1</span>} key="1">
                            Tab 1
                        </TabPane>
                        <TabPane tab={<span><WindowsOutlined />Tab 2</span>} key="2">
                            Tab 2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='新增Tab' className='content-box'>
                    <Tabs
                        defaultActiveKey='1'
                        activeKey={this.state.activeKey}
                        type='editable-card'
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panes) => <TabPane tab={panes.title} key={panes.key}>{panes.content}</TabPane>)
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default Tab;