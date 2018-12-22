import React, {Component} from 'react';
// 全局的style
import './style/index.scss';

import Header from './header'
import Footer from './footer'
import {Row, Col} from 'antd'
import Menu from "./menu";

export default class Main extends Component {
    render() {
        return (
            <Row className="container">
                {/*左侧菜单*/}
                <Col span="3" className="left">
                    <Menu/>
                </Col>
                {/*右侧内容*/}
                <Col span="21" className="right">
                    {/*右侧头部*/}
                    <Header className="top">
                    </Header>
                    {/*右侧详情*/}
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    {/*右侧底部*/}
                    <Footer className="footer">
                    </Footer>
                </Col>
            </Row>
        );
    }
}
