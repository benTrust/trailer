import React, { Component } from 'react'
import {Router, Route, browserHistory, Indexroute} from 'react-router'
import Sign from './components/sign'
import Trailers from './containers/trailers'
import Profil from './containers/profil'
import NotFound from './components/not-found'

class Routes extends Component{
    render(){
        return (
            <div>
                <Router history = {browserHistory}>
                    <Route path = "/trailers" component = {Trailers} />
                    <Route path = "/profil" component = {Profil} />
                    <Route path = "/" component = {Sign} />
                    <Route path = "*" component = {NotFound}/>
                </Router>
            </div>
        )
    }
}

export default Routes