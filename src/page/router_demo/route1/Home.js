import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>

                    <hr />
                    <Route exact path='/' component={Demo1} />
                    <Route exact path='/about' component={Demo2} />
                    <Route exact path='/dashboard' component={Demo3} />
                </div>
            </Router>
        );
    }
}

export default Home;