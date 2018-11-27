import React from 'react'
import {Menu,Icon} from 'antd'
import MenuConfig from './../../resource/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menuTreeNode:{}
        }
    }
    componentWillMount(){
       const menuTreeNode = this.renderMenu(MenuConfig);
       this.setState({
            menuTreeNode
       })
    }
    //菜单渲染,递归数据,菜单渲染，树的渲染,有子节点children就遍历，没有就返回最后一层
    renderMenu = (data) => {
       return data.map((item)=>{
           if(item.children){
            return (
                <SubMenu title={item.title} key = {item.key}>
                    { this.renderMenu(item.children)}
                </SubMenu>
            )   
           }
           return <Menu.Item title="item.title" key = {item.key}>{item.title}</Menu.Item>
       })
    }
    render(){
        return(
           <div>
               <div className ='logo'>
                   <img src='/assets/imooc.png' alt=''/>
                   <h1>Imooc MS</h1>
                </div> 
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>       
           </div>
        )
    }
}