import React, { Component } from 'react';
import './index.less'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='home-wrap'>欢迎来到coderan后台管理系统</div>
        );
    }
}
 
export default Home; 