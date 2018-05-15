import React from "react"
import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'
import Person from "./Person";
import { Switch, HashRouter, Route, Link } from 'react-router-dom'


export default (
    <Switch>
        <Route exact path="/" component={Route1} />
        <Route path="/route2" component={Route2} />
        <Route path="/route3" component={Route3} />
        <Route path="/person/:name" component={Person}/>
        <Route path="*" render = {()=><h1> 404 not found</h1>} />
    </Switch>

)