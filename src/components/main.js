import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './details/details.js';
import Home from './home.js';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/people/:name' component={Details}></Route>
        </Switch>
    </main>
)

export default Main;
