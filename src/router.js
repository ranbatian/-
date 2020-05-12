import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from './admin'
import NoMatch from './page/noMatch/index'
import Home from './page/home/index'
import ButtonUi from './page/ui/buttons/index'
import Modal from './page/ui/modal/index'
import Loadings from './page/ui/spin/index'
import Notification from './page/ui/notification/index'
import Message from './page/ui/message/index'
import Tabs from './page/ui/tabs/index'
import Carousel from './page/ui/carousel/index'
import LoginFrom from './page/from/loginFrom/index'
import RegisterFrom from './page/from/registerFrom/index'



class router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/home' component={Home} />
                                <Route path='/admin/ui/buttons' component={ButtonUi} />
                                <Route path='/admin/ui/modals' component={Modal} />
                                <Route path='/admin/ui/loadings' component={Loadings} />
                                <Route path='/admin/ui/notification' component={Notification} />
                                <Route path='/admin/ui/messages' component={Message} />
                                <Route path='/admin/ui/tabs' component={Tabs} />
                                <Route path='/admin/ui/carousel' component={Carousel} />
                                <Route path='/admin/form/login' component={LoginFrom} />
                                <Route path='/admin/form/reg' component={RegisterFrom} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path='/order/detial' component={Admin} />
                </App>
            </Router>
        );
    }
}

export default router;