import React from 'react'
import { BrowserRouter,Link,Route} from 'react-router-dom'
import {Row,Col} from 'antd'
import RouteMap from './routeMap'
import './index.less'
export default class extends React.Component{
    render(){
        return(
            <Row>
                <Col span={3} className="left-nav">
                    <RouteMap />
                </Col>
                <Col span={21} className='main'>
                222
                </Col>
            </Row>
        )     
    }
}