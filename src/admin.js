//return 只能有一个根组件
//import默认加载index
//style={{}},
import React from 'react'
import { Row ,Col} from 'antd'
import NavLeft from './components/NavLeft'
import './resource/common.less'

//import Header from './components/Header'
//import Footer from './components/Footer'


export default class Admin extends React.Component{
    render(){
        return(
            <Row className="container">
                <h1>xxxxxxx</h1>
                <Col span="3" className="nav-left">
                    <NavLeft />
                </Col>
            </Row>
        )
    }
}