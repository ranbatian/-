import React, { Component } from 'react';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import NoMatch from './NoMatch'


class router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path='/main' render={() =>
                            <Demo1>
                                <Route path='/main/:value' component={Demo4}></Route>
                            </Demo1>
                        }></Route>
                        <Route exact path='/about' component={Demo2}></Route>
                        <Route exact path='/dashboard' component={Demo3}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}

export default router;