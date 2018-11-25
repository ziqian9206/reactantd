import React from 'react'
import './life.less'
import {Button} from 'antd'
export default class extends React.Component{
    render(){
        return (<div>
            <p>React</p>
            <Button type="primary" className="btn">点击</Button>
            <p>lalal</p>
        </div>)
    }
}