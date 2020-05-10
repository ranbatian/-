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
                <br/>
                <Link to='/main/123'>嵌套路由1</Link>
                <br/>
                <Link to='/main/456'>嵌套路由2</Link>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

export default demo1;