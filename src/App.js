import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Error404, PageMain, PageSearch, PageMovies, PageMovie, PageSignIn, PageSignUp } from './components'

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
            <Route exact path='/movies' component={PageMovies} />
            <Route exact path='/movie/:id' component={PageMovie} />
            <Route exact path='/signin' component={PageSignIn} />
            <Route exact path='/signup' component={PageSignUp} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;
