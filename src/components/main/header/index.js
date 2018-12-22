import React, {Component} from 'react';
// 全局的style
import './style/index.scss';
import {Row, Col} from 'antd';
import moment from 'moment'
import api from './../../../comments/axios'

export default class Header extends Component {
    state = {
        user: 'lee',
        sysDate: '',
        weather: null
    };

    componentWillMount() {
        setInterval(() => {
            const sysDate = moment().format('YYYY-MM-DD HH:mm:ss');
            this.setState({
                sysDate
            })
        }, 1000);
        this.getWeatherApiData()
    }

    getWeatherApiData = () => {
        api.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent('重庆') + '&output=json&ak=G2A0X4SXCUZyndqr9VywYs20cfN1dfMx'
        }).then(rsp => {
            const weatherRsp = rsp.results[0].weather_data[0];
            const weather = {
                url: weatherRsp.dayPictureUrl,
                temperature: weatherRsp.temperature,
                weather: weatherRsp.weather
            };
            this.setState({weather})
        })
    };

    render() {
        const {weather} = this.state;
        return (
            <div className="top">
                <Row className="topFirst">
                    <span className="topUser">欢迎,{this.state.user}</span>
                    <a href="#">退出</a>
                </Row>
                <Row className="topSecond">
                    <Col span="4" className="top-title">首页</Col>
                    <Col span="20">
                        <span className="sysDate">{this.state.sysDate}</span>
                        {
                            weather ? <span>天气:<img src={weather.url} alt="图标"/>
                            <span>{weather.weather + ' 温度：' + weather.temperature}</span>
                        </span> : <span>天气获取失败</span>
                        }

                    </Col>
                </Row>
            </div>
        );
    }
}
