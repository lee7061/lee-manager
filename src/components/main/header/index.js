import React, {Component} from 'react';
// 全局的style
import './style/index.scss';
import {Row, Col} from 'antd'

export default class Header extends Component {
    state = {
        user: 'lee'
    };

    render() {
        return (
            <div>
                <Row className="topFirst">
                    <span className="topUser">欢迎,{this.state.user}</span>
                    <a href="#">退出</a>
                </Row>
                <hr/>
                <Row className="topSecond">
                    <Col span="17" className="">首页</Col>
                    <Col span="7">
                        <span>2018年12月15日17:11:55</span>
                        <span>天气</span>
                    </Col>
                </Row>
            </div>
        );
    }
}
