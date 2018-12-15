import React, {Component} from 'react';
// 组件
import RouteConfig from './../../../routeConfig.js'
import {Menu as AntMenu, Icon} from 'antd';
import logo from './../../../images/logo.svg'

export default class Menu extends Component {
    generateMenu = (routes) => {
        let newMenu = [];
        if (routes && routes.length > 0) {
            routes.forEach(r => {
                if (r.children && r.children.length > 0) {
                    newMenu.push(<AntMenu.SubMenu
                        key={r.key}
                        title={<span><Icon type={r.icon}/><span>{r.title}</span></span>}>
                        {this.generateMenu(r.children)}
                    </AntMenu.SubMenu>)
                } else {
                    newMenu.push(
                        <AntMenu.Item key={r.key}>
                            <Icon type={r.icon}/>
                            <span>{r.title}</span>
                        </AntMenu.Item>)
                }
            })
        }
        return newMenu;
    };

    render() {
        return (
            <div>
                <img src={logo} alt="logo"/>
                <AntMenu>
                    {this.generateMenu(RouteConfig)}
                </AntMenu>
            </div>
        );
    }
}
