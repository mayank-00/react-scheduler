import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import publicRoutes from './routes';
import CONFIG from 'config';

const Routes = ({ }) => {

    return <Router basename={CONFIG.baseURL}>
        <Switch>
            {
                publicRoutes.map(({ exact, path, Component }, index) => (
                    <Route key={index} exact={exact} path={path} >
                        <Component />
                    </Route>
                ))
            }
        </Switch>
    </Router>
}

export default Routes