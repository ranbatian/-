import React, { Component } from 'react';
import './index.less';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='footer'>版权所归：coderan</div>
        );
    }
}

export default Footer;