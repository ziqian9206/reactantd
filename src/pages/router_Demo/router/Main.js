import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
export default class Main extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                   this is main page
                </div>    
            </HashRouter>
        );
    }
}