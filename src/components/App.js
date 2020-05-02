import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import EssayCreate from './EssayCreate';
import EssayGrade from './EssayGrade';
import history from '../history';

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div className='ui container'>
                    <Switch>
                        <Route path="/" exact component={Welcome} />
                        <Route path="/essay" exact component={EssayCreate} />
                        <Route path="/grade" exact component={EssayGrade} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;