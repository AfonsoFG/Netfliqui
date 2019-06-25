import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Error404, PageMain, PageSearch, PageVideo } from './components'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-hind-guntur';
import './assets/css/font-circle-video.css';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={PageMain} />
            <Route exact path='/search' component={PageSearch} />
            <Route exact path='/video' component={PageVideo} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;
