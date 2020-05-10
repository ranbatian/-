import React, { Component } from 'react';

class demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>测试动态路由,动态的值为{this.props.match.params.value}</div>
        );
    }
}

export default demo4;