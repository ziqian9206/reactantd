//路由主页，放 switch exact精准匹配
//react路由三种类型，路由组件，路由匹配
import React from 'react'
import { BrowserRouter,Link,Route} from 'react-router-dom'

const Index = ()=><h2>Home</h2>
const About = ()=><h2>About</h2>
const Users = ()=><h2>Users</h2>
const Topic =({match})=><h3>Requested Param:{match.parmas.id}</h3>
const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
  
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
  
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
export default class Home extends React.Component{
    render(){
        return(
            < BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <Route path='/' exact component={Index} />
                    <Route path='/about' component={About} />
                    <Route path ="/users" component={Users}/>
                    <Route path='/topics' component={Topics}/>
                </div>   
            </ BrowserRouter>     
        );
    }
}