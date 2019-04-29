import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../pages/Laout';
import Home from '../pages/Home';
import Test from '../pages/Test';
import List from '../pages/List';

export default props => {
    return <Layout {...props}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/list" component={List} />
        </Switch>
    </Layout>
}