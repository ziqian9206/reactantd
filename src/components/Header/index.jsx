import React from 'react'
import { Row } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
export default class extends React.Component{
    render(){
        return(
            <Row>
                <Col span="3">
                    Left
                </Col>
                <Col span="21">
                    <Header />

                    <Row>

                    </Row>
                    <Footer />
                </Col>
            </Row>
        )
    }
}