import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from './admin'
import NoMatch from './page/noMatch'
import Home from './page/home'
import ButtonUi from './page/ui/buttons'
import Modal from './page/ui/modal'
import Loadings from './page/ui/spin'
import Notification from './page/ui/notification'
import Message from './page/ui/message'
import Tabs from './page/ui/tabs'
import Carousel from './page/ui/carousel'
import LoginFrom from './page/from/loginFrom'
import RegisterFrom from './page/from/registerFrom'
import City from './page/city'
import BasicForm from './page/table/basicTable'
import HeighForm from './page/table/hightTable'
import Order from './page/order'



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
                                <Route path='/admin/table/basic' component={BasicForm} />
                                <Route path='/admin/table/high' component={HeighForm} />
                                <Route path='/admin/city' component={City} />
                                <Route path='/admin/order' component={Order} />
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