import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history'
import Profile from './components/profile';
import main from './stylesheets/main.scss'

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Profile}/ >
        </Switch>
    </Router>,
    document.getElementById('root'));
