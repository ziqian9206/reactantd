import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
import Main from '../router/Main'
import About from '..router/About'
import Topic from '..router/Topic'
import Home from './home'
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
                </HashRouter>
        );
    }
}