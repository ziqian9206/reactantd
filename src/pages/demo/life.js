import React from 'react'

export default class extends React.Component{
    
    render(){
        return <div>
            <p>React</p>
            <button>点击</button>>
            <p>{this.state.count}</p>
        </div>
    }
}