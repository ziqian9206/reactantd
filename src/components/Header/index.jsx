import React from 'react'
import { Row ,Col} from 'antd';
import './index.less'
import Util from '../../util/util'
import axios from '../../axios'
export default class extends React.Component{
    componentWillMount(){
        this.setState({
            username:'欢迎，河畔一角',
            sysTime:''
        })
        setInterval(()=>{
            //moment插件
           let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
    }
    getWeatherData=()=>{
        const api = 'http://api.douban.com/v2/movie/top250?start=25&count=25'
        axios({url:api}).then()
    }
    render(){
        return(
        <div className="header">
            <Row className="header-top">
                <Col span="24">
                    <span>{this.state.username}</span>
                    <a href='#'>退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">
                    首页
                </Col>
                <Col span="20" className="weather">
                    <span className='date'>{this.state.sysTime}</span>
                    <span className="weather-detail">晴转多云</span>
                </Col>
            </Row>
        </div>  
        )
    }
}