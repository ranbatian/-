import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                demo1  2
                <Link to='/main/a'>嵌套路由</Link>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default demo1;