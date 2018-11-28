import React from 'react'
import { BrowserRouter,Link,Route} from 'react-router-dom'
import {Row,Col} from 'antd'
import RouteMap from './routeMap'
import './index.less'
export default class extends React.Component{
    render(){
        return(
           <BrowserRouter>
                <ul>
                    <li>
                        <Link to = '/QuickStart'>Quick Start</Link>
                    </li>
                    <li>
                        <Link to = "/BasicComponent">Basic Component</Link>
                    </li>
                    <li>
                        <Link to = "/ServerRender">Server Render</Link>
                    </li>
                    <li>
                        <Link to = "/CodeSplitting">Code Splitting</Link>
                    </li>
                    <li>
                        <Link to = "/ScrollRestoration">Scroll Restoration</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="" Component/>
                    <Route />
                    <Route />
                    <Route />
                    <Route component = {NoMatch}/>
                </Switch>
           </BrowserRouter>
        )     
    }
}