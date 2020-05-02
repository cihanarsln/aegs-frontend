import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Essay from './Essay';
import history from '../history';

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div className='ui container'>
                    <Switch>
                        <Route path="/" exact component={Welcome} />
                        <Route path="/essay" exact component={Essay} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;